import { memo } from "react";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { IPokemon } from "../../slices/types";
import "./FavoritePokemons.scss"

interface FavoritePokemonProps {
    favorites: IPokemon[];
    handleRemoveFavorite: (id: number) => void;
}

export const FavoritePokemons = memo(
    ({ favorites, handleRemoveFavorite }: FavoritePokemonProps) => {
        return (
            <div className="favorite-cards">
                {favorites.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.id}
                        {...pokemon}
                        handleRemoveFavorite={() =>
                            handleRemoveFavorite(pokemon.id)
                        }
                        isFavorite={true}
                    />
                ))}
            </div>
        );
    }
);
