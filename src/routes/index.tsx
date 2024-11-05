import { createBrowserRouter } from "react-router-dom";
import { FavoritePage } from "../pages/FavoritePage/FavoritePage";
import { MainPage } from "../pages/MainPage/MainPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/favorite",
        element: <FavoritePage />,
    },
]);
