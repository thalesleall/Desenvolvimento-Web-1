import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { PokemonListResponse, PokemonListItem } from '../types/pokemon';
import './inicio.css';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

function HomePage() {
  const [pokemonList, setPokemonList] = useState<PokemonListItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [nextUrl, setNextUrl] = useState<string | null>(API_URL);

  const fetchPokemon = useCallback(async (url: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get<PokemonListResponse>(url);
      setPokemonList((prevList) => [...prevList, ...response.data.results]);
      setNextUrl(response.data.next);
    } catch (err) {
      console.error("Erro ao buscar a lista de Pokémon:", err);
      setError('Falha ao buscar a lista de Pokémon. Por favor, tente novamente.');
      setNextUrl(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (pokemonList.length === 0 && nextUrl) {
      fetchPokemon(nextUrl);
    }
  }, [fetchPokemon, pokemonList.length, nextUrl]);

  const handleLoadMore = () => {
    if (nextUrl && !isLoading) {
      fetchPokemon(nextUrl);
    }
  };

  const getPokemonIdFromUrl = (url: string): string => {
    const parts = url.split('/').filter(Boolean);
    return parts[parts.length - 1];
  };

  const getPokemonImageUrl = (pokemonUrl: string): string => {
    const id = getPokemonIdFromUrl(pokemonUrl);
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  };

  return (
    <div className="pokedex-container">
      <h1>Pokédex</h1>
      {error && <p className="error-message">{error}</p>}
      <div className="pokemon-grid">
        {pokemonList.map((pokemon) => (
          <Link
            to={`/pokemon?name=${pokemon.name}`}
            key={pokemon.name}
            className="pokemon-card-link"
          >
            <div className="pokemon-card">
              <img
                src={getPokemonImageUrl(pokemon.url)}
                alt={pokemon.name}
                className="pokemon-image"
                onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/96?text=?')}
              />
              <p className="pokemon-name">{pokemon.name}</p>
            </div>
          </Link>
        ))}
      </div>

      {isLoading && <p>Carregando Pokémon...</p>}

      {!isLoading && nextUrl && (
        <button onClick={handleLoadMore} disabled={isLoading} className="load-more-button">
          Carregar mais Pokémon
        </button>
      )}
      {!isLoading && !nextUrl && pokemonList.length > 0 && (
        <p>Todos os Pokémon foram carregados!</p>
      )}
    </div>
  );
}

export default HomePage;    