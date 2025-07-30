import { Character } from '../models/character';
import { loadFavorites, saveFavorites } from '../services/database';

export const CharacterRepository = {
  async getFavorites(): Promise<Character[]> {
    return await loadFavorites();
  },

  async addToFavorites(character: Character): Promise<void> {
    const favorites = await loadFavorites();
    const exists = favorites.some((c: Character) => c.id === character.id);
    if (!exists) {
      favorites.push(character);
      await saveFavorites(favorites);
    }
  },

  async removeFromFavorites(id: number): Promise<void> {
    let favorites = await loadFavorites();
    favorites = favorites.filter((c: Character) => c.id !== id);
    await saveFavorites(favorites);
  },

  
export async function fetchCharacters(): Promise<Character[]> {
  try {
    const response = await fetch(`${BASE_URL}/character`);
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error("Error fetching characters:", err);
    return [];
  }
}

export async function fetchCharacterById(id: number): Promise<Character | null> {
  try {
    const response = await fetch(`${BASE_URL}/character/${id}`);
    return await response.json();
  } catch (err) {
    console.error("Error fetching character:", err);
    return null;
  }
}

export async function searchCharactersByName(name: string): Promise<Character[]> {
  try {
    const response = await fetch(`${BASE_URL}/character/?name=${name}`);
    const data = await response.json();
    return data.results || [];
  } catch {
    return [];
  }
}

};
