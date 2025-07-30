import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async () => {
  const response = await axios.get(`${API_URL}/character`);
  return response.data.results;
};

export const getCharacterById = async (id: number) => {
  const response = await axios.get(`${API_URL}/character/${id}`);
  return response.data;
};

export const searchCharacters = async (query: string) => {
  const response = await axios.get(`${API_URL}/character/?name=${query}`);
  return response.data.results;
};