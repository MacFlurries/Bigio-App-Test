import React from 'react';
import { Image, Text, View } from 'react-native';

const Detail = ({ route }: any) => {
  const { character } = route.params;

  return (
    <View>
      <Image source={{ uri: character.image }} style={{ width: 200, height: 200 }} />
      <Text>{character.name}</Text>
      <Text>{character.gender}</Text>
      <Text>{character.species}</Text>
      <Text>{character.origin.name}</Text>
      <Text>{character.location.name}</Text>
    </View>
  );
};

export default Detail;