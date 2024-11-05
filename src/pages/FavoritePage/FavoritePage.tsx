import { selectFavorite, removeFavorite } from "../../slices/favoriteSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { FavoritePokemons } from "../../components/FavoritePokemons/FavoritePokemons";
import "./FavoritePage.scss";

export const FavoritePage = () => {
    const dispatch = useAppDispatch();
    const favorites = useAppSelector(selectFavorite);

    const handleRemoveFavorite = (id: number) => {
        dispatch(removeFavorite(id));
    };

    return (
        <section className="favorite-page">
            <h2>Featured Pokemons</h2>
            {favorites.length === 0 ? (
                <p>No featured Pokemons</p>
            ) : (
                <div className="favorite-page__pokemons">
                    <FavoritePokemons
                        favorites={favorites}
                        handleRemoveFavorite={handleRemoveFavorite}
                    />
                </div>
            )}
        </section>
    );
};
