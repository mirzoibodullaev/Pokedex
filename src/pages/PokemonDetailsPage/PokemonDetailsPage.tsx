import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokemonDetails } from "../../components/PokemonDetails/PokemonDetails";
import { IPokemon } from "../../types";
import { Skeleton } from "../../components/Skeleton/Skeleton";
import { __API__ } from "../../api";

export const PokemonDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const [pokemon, setPokemon] = useState<IPokemon | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                const response = await axios.get<IPokemon>(
                    `${__API__}pokemon/${id}`
                );
                setPokemon(response.data);
            } catch (error) {
                setError("Failed to fetch Pokémon details.");
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemonDetails();
    }, [id]);

    if (loading) return <Skeleton variant="details" />;
    if (error) return <p>{error}</p>;
    if (!pokemon) return <p>Pokémon not found.</p>;

    return <PokemonDetails pokemon={pokemon} />;
};
