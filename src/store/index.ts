import { configureStore } from "@reduxjs/toolkit";
import { favoriteReducer } from "../slices/favoriteSlice";
import { pokemonReducer } from "../slices/pokemonSlice";

export const store = configureStore({
    reducer: {
        pokemon: pokemonReducer,
        favorite: favoriteReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
