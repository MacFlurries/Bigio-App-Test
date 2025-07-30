import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import CharacterCard from '../components/CharacterCard';
import { Character } from '../models/character';
import { CharacterRepository } from '../repositories/characterRepository';

const Favorite = ({ navigation }: any) => {
  const [favorites, setFavorites] = useState<Character[]>([]);

  useEffect(() => {
    CharacterRepository.getFavorites().then(setFavorites);
  }, []);

  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <CharacterCard character={item} onPress={() => navigation.navigate('Detail', { character: item })} />
      )}
    />
  );
};

export default Favorite;