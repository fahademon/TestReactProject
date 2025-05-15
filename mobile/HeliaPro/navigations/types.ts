import type { Breed } from '@common/types/cat.types';

export type RootStackParamList = {
  // …other screens
  BreedDetails: { breed: Breed };
};
