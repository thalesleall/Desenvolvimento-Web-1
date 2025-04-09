// src/types/pokemon.ts

// For the list endpoint (/pokemon)
export interface PokemonListItem {
    name: string;
    url: string; // URL to the detailed pokemon data
  }
  
  export interface PokemonListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonListItem[];
  }
  
  // For the detail endpoint (/pokemon/{name_or_id})
  export interface PokemonType {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }
  
  export interface PokemonAbility {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }
  
  export interface PokemonStat {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }
  
  export interface PokemonSprites {
    front_default: string | null;
    front_shiny: string | null;
    back_default: string | null;
    back_shiny: string | null;
    other?: {
      dream_world?: {
        front_default: string | null;
      };
      home?: {
        front_default: string | null;
        front_shiny: string | null;
      }
      'official-artwork'?: {
        front_default: string | null;
      };
    };
    // Add more sprites if needed
  }
  
  export interface PokemonDetail {
    id: number;
    name: string;
    height: number; // Decimetres
    weight: number; // Hectograms
    sprites: PokemonSprites;
    types: PokemonType[];
    abilities: PokemonAbility[];
    stats: PokemonStat[];
    // Add other fields as needed (e.g., moves, species)
  }