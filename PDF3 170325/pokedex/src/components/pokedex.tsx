"use client"

import type React from "react"
import { useState } from "react"
import { Button, Card, InputGroup } from "react-bootstrap"
import "./pokedex.css"

interface PokemonData {
  id: number
  name: string
  weight: number
  height: number
  sprites: {
    front_default: string
  }
}

const Pokedex: React.FC = () => {
  const [nomePokemon, setNomePokemon] = useState("")
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null)

  const fetchPokemon = async (nomePokemon: string) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon.toLowerCase()}`)
      if (!response.ok) {
        throw new Error("Pokémon não encontrado")
      }
      return await response.json()
    } catch (error) {
      console.error(error)
      return null
    }
  }

  const handleSearch = async () => {
    if (nomePokemon.trim() === "") return

    const data = await fetchPokemon(nomePokemon)
    setPokemonData(data)
  }

  return (
    <Card className="principal-card"
    >
      <div style={{ margin: "10px" }}>
        <div>
          <h2>Nome: {pokemonData && <span>{pokemonData.name.toUpperCase()}</span>}</h2>
          <Card style={{ padding: "10px", margin: "10px", width: "300px", height: "300px" }}>
            {pokemonData && (
              <img
                src={pokemonData.sprites.front_default || "/placeholder.svg"}
                alt={pokemonData.name}
                style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
              />
            )}
          </Card>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Nome do Pokemon</InputGroup.Text>
          <input
            type="text"
            className="form-control"
            value={nomePokemon}
            onChange={(e) => setNomePokemon(e.target.value)}
            placeholder="Nome do Pokemon"
            aria-label="Nome do Pokemon"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <Card style={{ padding: "10px", margin: "10px", width: "300px" }}>
          <>
            <p>N° {pokemonData && <span>{pokemonData.id}</span>}</p>
            <p>Peso: {pokemonData && <span>{pokemonData.weight / 10}kg</span>}</p>
            <p>Altura: {pokemonData && <span>{pokemonData.height / 10}m</span>}</p>
          </>
        </Card>

        <Button onClick={handleSearch}>Buscar Pokemon</Button>
      </div>
    </Card>
  )
}

export default Pokedex

