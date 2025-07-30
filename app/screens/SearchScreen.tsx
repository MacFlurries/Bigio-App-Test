import React, { useState } from 'react';
import { FlatList, TextInput } from 'react-native';
import CharacterCard from '../components/CharacterCard';
import { Character } from '../models/character';
import { searchCharacters } from '../services/api';

const Search = ({ navigation }: any) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Character[]>([]);

  const handleSearch = async (text: string) => {
    setQuery(text);
    if (text.length > 2) {
      const data = await searchCharacters(text);
      setResults(data);
    }
  };

  return (
    <>
      <TextInput
        placeholder="Search characters..."
        onChangeText={handleSearch}
        value={query}
      />
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CharacterCard character={item} onPress={() => navigation.navigate('Detail', { character: item })} />
        )}
      />
    </>
  );
};

export default Search;