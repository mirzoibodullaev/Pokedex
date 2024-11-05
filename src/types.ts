export interface IPokemonStat {
    base_stat: number;
    stat: {
        name: string;
        url: string;
    };
}
export interface IPokemonAbility {
    ability: {
        name: string;
        url: string;
    };
}
export interface IPokemon {
    name: string;
    id: number;
    image: string;
    types: string[];
    isFavorite: boolean;
    weight: number;
    height: number;
    abilities: IPokemonAbility[];
    stats: IPokemonStat[];
    sprites: {
        front_default: string;
    };
}

export interface PokemonState {
    pokemons: IPokemon[];
    isLoading: boolean;
}
