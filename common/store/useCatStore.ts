import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { getBreeds, getBreedImages } from '@common/services/catAPI';
import { Breed, CatImage, AdoptionRecord } from '@common/types/cat.types';

interface CatState {
  breeds: Breed[];
  selectedBreed: Breed | null;
  images: CatImage[];
  loading: boolean;
  adoptionRecords: AdoptionRecord[];
  
  fetchBreeds: () => Promise<void>;
  selectBreed: (breed: Breed) => Promise<void>;
  clearSelectedBreed: () => void;
  adoptNow: (record: AdoptionRecord) => void;
}

const useCatStore = create<CatState>()(
  persist(
    (set, get) => ({
      breeds: [],
      selectedBreed: null,
      images: [],
      loading: false,
      adoptionRecords: [],

      fetchBreeds: async () => {
        set({ loading: true });
        const data = await getBreeds();
        set({ breeds: data, loading: false });
      },

      selectBreed: async (breed) => {
        set({ loading: true, selectedBreed: breed });
        const imgs = await getBreedImages(breed.id);
        set({ images: imgs, loading: false });
      },

      clearSelectedBreed: () => set({ selectedBreed: null, images: [] }),

      // record a completed adoption (with user data)
      adoptNow: (record) => {
        set(state => ({
          adoptionRecords: [...state.adoptionRecords, record]
        }));
      },
    }),
    {
      name: 'cat-store', // name of item in storage
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ adoptionRecords: state.adoptionRecords }),
    }
  )
);

export default useCatStore;
