import { useMemo } from "react";
import { IPokemon } from "../slices/types";

interface UseFilterProps {
    pokemons: IPokemon[];
    searchTerm: string;
    selectedType: string;
}

export const useFilter = ({ pokemons, searchTerm, selectedType }: UseFilterProps) => {
    const filteredPokemons = useMemo(() => {
        return pokemons.filter(
            (pokemon) =>
                pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (selectedType ? pokemon.types.includes(selectedType) : true)
        );
    }, [pokemons, searchTerm, selectedType]);

    return filteredPokemons;
};
