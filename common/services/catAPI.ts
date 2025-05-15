import axios from 'axios';
import { Breed, CatImage } from '../types/cat.types';

//console.log(import.meta.env.VITE_CAT_API_KEY)

const api = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': "live_vvCvW3wDXf3EDaJIIWvN9GgNChn6UoHUlHIJX5AG8ru5qhgEK8X3XVOeItRH49oV"//import.meta.env.VITE_CAT_API_KEY
  },
});

export const getBreeds = (): Promise<Breed[]> =>
  api.get<Breed[]>('/breeds').then(res => res.data);

export const getBreedImages = (breedId: string, limit = 5): Promise<CatImage[]> =>
  api
    .get<CatImage[]>('/images/search', {
      params: { breed_id: breedId, limit },
    })
    .then(res => res.data);
