export interface IPokemon {
    name: string;
    id: number;
    image: string;
    types: string[];
    isFavorite: boolean;
}

export interface PokemonState {
    pokemons: IPokemon[];
    isLoading: boolean;
}
