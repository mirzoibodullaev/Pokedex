import axios from "axios";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPokemon, PokemonState } from "./types";
import { RootState } from "../store";
import { __API__ } from "../api";

export const fetchPokemon = createAsyncThunk(
    "pokemon/fetchPokemon",
    async (offset: number, thunkAPI) => {
        try {
            const res = await axios.get(
                `${__API__}pokemon?offset=${offset}&limit=10`
            );

            const pokemonList = res.data.results;
            const detailedPokemonData = await Promise.all(
                pokemonList.map(
                    async (pokemon: { name: string; url: string }) => {
                        const details = await axios.get(pokemon.url);
                        const types = details.data.types.map(
                            (typeInfo: { type: { name: string } }) =>
                                typeInfo.type.name
                        );
                        return {
                            name: details.data.name,
                            id: details.data.id,
                            image: details.data.sprites.front_default,
                            types,
                        };
                    }
                )
            );

            return detailedPokemonData;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const initialState: PokemonState = {
    pokemons: [],
    isLoading: false,
};

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPokemon.pending, (state: PokemonState) => {
            state.isLoading = true;
        });
        builder.addCase(
            fetchPokemon.fulfilled,
            (state: PokemonState, action: PayloadAction<IPokemon[]>) => {
                state.isLoading = false;
                state.pokemons = action.payload;
            }
        );
        builder.addCase(fetchPokemon.rejected, (state: PokemonState) => {
            state.isLoading = false;
        });
    },
});
export const selectIsLoading = (state: RootState) => state.pokemon.isLoading;
export const selectPokemon = (state: RootState) => state.pokemon.pokemons;
export const pokemonReducer = pokemonSlice.reducer;
