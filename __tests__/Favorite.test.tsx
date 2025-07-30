import { CharacterRepository } from '../app/repositories/characterRepository';

describe('Favorites', () => {
  it('adds and removes favorites', async () => {
    const character = {
      id: 10,
      name: 'Summer Smith',
      image: 'img-url',
      gender: 'Female',
      species: 'Human',
      origin: { name: 'Earth' },
      location: { name: 'Earth' },
    };

    await CharacterRepository.addToFavorites(character);
    const favorites = await CharacterRepository.getFavorites();
    expect(favorites.some(c => c.id === 10)).toBe(true);

    await CharacterRepository.removeFromFavorites(10);
    const newFavorites = await CharacterRepository.getFavorites();
    expect(newFavorites.some(c => c.id === 10)).toBe(false);
  });
});
