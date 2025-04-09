import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { PokemonDetail } from '../types/pokemon'; // Ajuste o caminho se necessário
import './PokemonDetail.css'; // Crie este arquivo CSS para estilização

const API_URL_BASE = 'https://pokeapi.co/api/v2/pokemon/';

function PokemonPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const pokemonName = searchParams.get('name'); // Obtém o nome do Pokémon dos parâmetros da URL

  const [pokemonData, setPokemonData] = useState<PokemonDetail | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!pokemonName) {
      setError('Nenhum nome de Pokémon especificado.');
      setIsLoading(false);
      return;
    }

    const fetchPokemonDetail = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get<PokemonDetail>(`${API_URL_BASE}${pokemonName.toLowerCase()}`);
        setPokemonData(response.data);
      } catch (err: any) {
        console.error("Erro ao buscar detalhes do Pokémon:", err);
        if (err.response && err.response.status === 404) {
            setError(`Pokémon "${pokemonName}" não encontrado.`);
        } else {
            setError('Falha ao buscar detalhes do Pokémon. Tente novamente.');
        }
        setPokemonData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemonDetail();
  }, [pokemonName, navigate]); // Refaz a busca quando o nome do Pokémon muda

  if (isLoading) {
    return <div className="loading-details">Carregando detalhes do Pokémon...</div>;
  }

  if (error) {
    return (
        <div className="error-details">
            <p>{error}</p>
            <Link to="/" className="back-link">Voltar para a Pokédex</Link>
        </div>
    );
  }

  if (!pokemonData) {
    return <div className="error-details">Dados do Pokémon não disponíveis.</div>;
  }

  const imageUrl = pokemonData.sprites.other?.['official-artwork']?.front_default
                 ?? pokemonData.sprites.front_default
                 ?? 'https://via.placeholder.com/150?text=?'; // Imagem padrão

  return (
    <div className="pokemon-detail-container">
        <Link to="/" className="back-link">← Voltar para a Pokédex</Link>
      <h1>{pokemonData.name} (#{pokemonData.id})</h1>
      <div className="pokemon-detail-content">
        <img
            src={imageUrl}
            alt={pokemonData.name}
            className="pokemon-detail-image"
            onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/150?text=?')}
        />
        <div className="pokemon-info">
            <section>
                <h2>Informações</h2>
                <p><strong>Altura:</strong> {pokemonData.height / 10} m</p> {/* Converte dm para m */}
                <p><strong>Peso:</strong> {pokemonData.weight / 10} kg</p> {/* Converte hg para kg */}
            </section>

            <section>
                <h2>Tipos</h2>
                <ul className="info-list type-list">
                    {pokemonData.types.map((typeInfo) => (
                    <li key={typeInfo.slot} className={`type-tag type-${typeInfo.type.name}`}>
                        {typeInfo.type.name}
                    </li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Habilidades</h2>
                <ul className="info-list">
                    {pokemonData.abilities.map((abilityInfo) => (
                    <li key={abilityInfo.ability.name}>
                        {abilityInfo.ability.name} {abilityInfo.is_hidden ? '(Oculta)' : ''}
                    </li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Atributos</h2>
                <ul className="info-list stat-list">
                    {pokemonData.stats.map((statInfo) => (
                    <li key={statInfo.stat.name}>
                        <strong>{statInfo.stat.name}:</strong> {statInfo.base_stat}
                        <div className="stat-bar-container">
                            <div
                                className="stat-bar"
                                style={{ width: `${Math.min(statInfo.base_stat / 1.5, 100)}%` }} // Escala visual máxima
                            ></div>
                        </div>
                    </li>
                    ))}
                </ul>
            </section>
        </div>
      </div>
    </div>
  );
}

export default PokemonPage;