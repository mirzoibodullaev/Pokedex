import { memo } from "react";
import "./PokemonCard.scss";

interface PokemonCardProps {
    name: string;
    id: number;
    image: string;
    isFavorite?: boolean;
    types: string[];
    handleAddFavorite?: () => void;
    handleRemoveFavorite?: () => void;
}

export const PokemonCard = memo(
    ({
        name,
        image,
        isFavorite = false,
        types,
        handleAddFavorite,
        handleRemoveFavorite,
    }: PokemonCardProps) => {
        return (
            <div className="pokemon-card">
                <h3 className="pokemon-card__name">{name}</h3>
                <img
                    loading="lazy"
                    className="pokemon-card__img"
                    src={image}
                    alt={name}
                />
                <div className="pokemon-card__types">
                    {types.map((type) => (
                        <span key={type} className="pokemon-card__type">
                            {type}
                        </span>
                    ))}
                </div>
                {isFavorite ? (
                    <button
                        onClick={handleRemoveFavorite}
                        className="pokemon-card__btn remove"
                    >
                        Remove from favorites
                    </button>
                ) : (
                    <button
                        onClick={handleAddFavorite}
                        className="pokemon-card__btn "
                    >
                        Add to favorites
                    </button>
                )}
            </div>
        );
    }
);
