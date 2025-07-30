import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import CharacterCard from '../components/CharacterCard';
import LoadingState from '../components/LoadingState';
import { Character } from '../models/character';
import { getCharacters } from '../services/api';

const Home = ({ navigation }: any) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCharacters().then(data => {
      setCharacters(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <LoadingState />;

  return (
    <FlatList
      data={characters}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <CharacterCard character={item} onPress={() => navigation.navigate('Detail', { character: item })} />
      )}
    />
  );
};

export default Home;