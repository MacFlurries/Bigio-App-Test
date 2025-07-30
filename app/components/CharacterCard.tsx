import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Character } from '../models/character';

interface Props {
  character: Character;
  onPress: () => void;
}

const CharacterCard = ({ character, onPress }: Props) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={{ uri: character.image }} style={styles.image} />
    <Text style={styles.name}>{character.name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: { padding: 10 },
  image: { width: 100, height: 100, borderRadius: 50 },
  name: { textAlign: 'center', marginTop: 5 },
});

export default CharacterCard;