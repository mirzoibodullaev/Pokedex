import { useState, useEffect, memo, useCallback, useMemo } from "react";
import { selectPokemon, selectIsLoading, fetchPokemon } from "../../slices/pokemonSlice";
import { addFavorite, removeFavorite, selectFavorite } from "../../slices/favoriteSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { usePagination } from "../../hooks/usePagination";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { Pagination } from "../../components/Pagination/Pagination";
import { useFilter } from "../../hooks/useFilter"; 
import { IPokemon } from "../../slices/types";
import { Skeleton } from "../../components/Skeleton/Skeleton";
import { Search } from "../../components/Search/Search";
import { Select } from "../../components/Select/Select";
import "./MainPage.scss";

export const MainPage = memo(() => {
    const dispatch = useAppDispatch();
    const pokemons = useAppSelector(selectPokemon);
    const isLoading = useAppSelector(selectIsLoading);
    const favorites = useAppSelector(selectFavorite);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const { page, handlePrevious, handleNext } = usePagination(0);

    useEffect(() => {
        dispatch(fetchPokemon(page));
    }, [dispatch, page]);

    const handleAddFavorite = useCallback(
        (pokemon: IPokemon) => dispatch(addFavorite(pokemon)),
        [dispatch]
    );

    const handleRemoveFavorite = useCallback(
        (id: number) => dispatch(removeFavorite(id)),
        [dispatch]
    );

    const filteredPokemons = useFilter({ pokemons, searchTerm, selectedType });

    const pokemonCards = useMemo(() => {
        return filteredPokemons.map((pokemon) => {
            const isFavorite = favorites.some((fav) => fav.id === pokemon.id);
            return (
                <PokemonCard
                    key={pokemon.id}
                    {...pokemon}
                    handleAddFavorite={() => handleAddFavorite(pokemon)}
                    handleRemoveFavorite={() =>
                        handleRemoveFavorite(pokemon.id)
                    }
                    isFavorite={isFavorite}
                />
            );
        });
    }, [filteredPokemons, favorites, handleAddFavorite, handleRemoveFavorite]);

    return (
        <main>
            <div className="filter">
                <Search
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                />
                <Select
                    selectedType={selectedType}
                    onSelectType={setSelectedType}
                />
            </div>
            <div className="pagination-buttons">
                <Pagination
                    onNext={handleNext}
                    onPrevious={handlePrevious}
                    page={page}
                />
            </div>
            {isLoading ? (
                <Skeleton />
            ) : (
                <div className="pokemon-card-container">{pokemonCards}</div>
            )}
        </main>
    );
});
