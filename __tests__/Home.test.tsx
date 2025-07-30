import { render, waitFor } from '@testing-library/react-native';
import React from 'react';
import { CharacterRepository } from '../app/repositories/characterRepository';
import HomeScreen from '../app/screens/HomeScreen';

jest.mock('../app/repositories/characterRepository');

describe('HomeScreen', () => {
  it('renders character list from repository', async () => {
    (CharacterRepository.getCharacters as jest.Mock).mockResolvedValue([
      { id: 1, name: 'Rick Sanchez', image: 'url', species: 'Human' },
    ]);

    const { getByText } = render(<HomeScreen />);
    await waitFor(() => {
      expect(getByText('Rick Sanchez')).toBeTruthy();
    });
  });
});
