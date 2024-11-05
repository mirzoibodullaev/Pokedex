import { memo } from "react";
import { IPokemon } from "../../types";
import "./PokemonDetails.scss";

interface PokemonDetailsProps {
    pokemon: IPokemon;
}

export const PokemonDetails = memo(({ pokemon }: PokemonDetailsProps) => {
    return (
        <div className="pokemon-details">
            <h1 className="pokemon-details__name">{pokemon.name}</h1>
            <img
                className="pokemon-details__image"
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
            />
            <div className="pokemon-details__info">
                <p>Weight: {pokemon.weight}</p>
                <p>Height: {pokemon.height}</p>
                <div className="pokemon-details__abilities">
                    <h2>Abilities:</h2>
                    <ul>
                        {pokemon.abilities.map((ability) => (
                            <li key={ability.ability.name}>
                                {ability.ability.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="pokemon-details__stats">
                    <h2>Base Stats:</h2>
                    <ul>
                        {pokemon.stats.map((stat) => (
                            <li key={stat.stat.name}>
                                {stat.stat.name}: {stat.base_stat}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="pokemon-details__abilities">
                    <h2>Abilities:</h2>
                    <ul>
                        {pokemon.abilities.map((abilityObj) => (
                            <li key={abilityObj.ability.name}>
                                {abilityObj.ability.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
});
