import { fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import { CharacterRepository } from '../app/repositories/characterRepositor';
import SearchScreen from '../app/screens/SearchScreen';

jest.mock('../app/repositories/characterRepository');

describe('SearchScreen', () => {
  it('searches characters and shows result', async () => {
    (CharacterRepository.searchCharacters as jest.Mock).mockResolvedValue([
      { id: 2, name: 'Morty Smith', image: 'url', species: 'Human' },
    ]);

    const { getByPlaceholderText, getByText } = render(<SearchScreen />);
    fireEvent.changeText(getByPlaceholderText('Search character...'), 'Morty');
    fireEvent(getByPlaceholderText('Search character...'), 'submitEditing');

    await waitFor(() => {
      expect(getByText('Morty Smith')).toBeTruthy();
    });
  });
});
