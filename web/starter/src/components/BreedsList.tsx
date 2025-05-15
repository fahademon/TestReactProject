import React, { useEffect, useState } from 'react';
import useCatStore from '@common/store/useCatStore';
import { Breed } from '@common/types/cat.types';
import { Page } from './shared/Page';
import { BreedModal } from './Breed';

export const BreedListPage: React.FC = () => {
  // Select store slices individually to avoid re-creating selectors
  const fetchBreeds = useCatStore(state => state.fetchBreeds);
  const breeds = useCatStore(state => state.breeds);
  const loading = useCatStore(state => state.loading);
  const selectBreed = useCatStore(state => state.selectBreed);

  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState<Breed[]>([]);
  //const [weight, setWeight] = useState(0);
  //const [weight, setWeight] = useState(0);
  
  const CatPage: React.FC = () => {
    return (
        <></>
    );
  }

  // Fetch breeds once on mount
  useEffect(() => {
    fetchBreeds();
  }, [fetchBreeds]);

  // Filter breeds when breeds list or search term changes
  useEffect(() => {
    if (!search) {
      setFiltered(breeds);
    } else {
      const term = search.toLowerCase();
      setFiltered(
        breeds.filter(b => 
          b.name.toLowerCase().includes(term) ||
          b.temperament.toLowerCase().includes(term) || 
          b.origin.toLowerCase().includes(term) ||
          b.description.toLowerCase().includes(term) ||
          b["alt_names"]?.toLowerCase().includes(term)
        )
      );
    }
    console.log(breeds[0])
  }, [search, breeds]);

  return (
    <Page title="Browse Cats">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search breeds..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      {loading ? (
        <div className="text-center p-4">Loading breeds...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(breed => (
            <div key={breed.id} className="border rounded shadow p-4 flex flex-col">
              {(breed.image?.url) && (
                <img
                  src={breed.image?.url}
                  alt={breed.name}
                  className="h-32 w-full object-cover rounded mb-2"
                />
              )}
              <h3 className="text-lg font-semibold mb-1">{breed.name}</h3>
              <p className="text-sm flex-1">{breed.temperament}</p>
              <BreedModal { ...breed }></BreedModal>
            </div>
          ))}
        </div>
      )}
    </Page>
  );
};
