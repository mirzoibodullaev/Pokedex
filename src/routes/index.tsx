import { Navigate, createBrowserRouter } from "react-router-dom";
import { FavoritePage } from "../pages/FavoritePage/FavoritePage";
import { MainPage } from "../pages/MainPage/MainPage";
import { PokemonDetailsPage } from "../pages/PokemonDetailsPage/PokemonDetailsPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/favorite",
        element: <FavoritePage />,
    },
    {
        path: "/pokemon/:id",
        element: <PokemonDetailsPage />,
    },
    {
        path: "*",
        element: <Navigate to="/" replace />,
    },
]);
