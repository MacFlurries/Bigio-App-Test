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
};
