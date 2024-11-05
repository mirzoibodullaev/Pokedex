import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IPokemon } from "../types";

interface FavoritesState {
    favorites: IPokemon[];
}

const initialState: FavoritesState = {
    favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorite: (
            state: FavoritesState,
            action: PayloadAction<IPokemon>
        ) => {
            const pokemon = action.payload;
            const exists = state.favorites.find((fav) => fav.id === pokemon.id);
            if (!exists) {
                state.favorites.push(pokemon);
                localStorage.setItem(
                    "favorites",
                    JSON.stringify(state.favorites)
                );
            }
        },
        removeFavorite: (
            state: FavoritesState,
            action: PayloadAction<number>
        ) => {
            state.favorites = state.favorites.filter(
                (pokemon) => pokemon.id !== action.payload
            );
            localStorage.setItem("favorites", JSON.stringify(state.favorites));
        },
    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const selectFavorite = (state: RootState) => state.favorite.favorites;
export const favoriteReducer = favoritesSlice.reducer;
