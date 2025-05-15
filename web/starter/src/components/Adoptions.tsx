import React, { useEffect, useState } from 'react';
import useCatStore from '@common/store/useCatStore';
import { Breed, AdoptionRecord } from '@common/types/cat.types';
import { Page } from './shared/Page';
import { BreedModal } from './Breed';

export const AdoptionPage: React.FC = () => {
  // Select store slices individually to avoid re-creating selectors
  const fetchBreeds = useCatStore(state => state.fetchBreeds);
  const adoptions = useCatStore(state => state.adoptionRecords);
  const loading = useCatStore(state => state.loading);
  //const [weight, setWeight] = useState(0);
  //const [weight, setWeight] = useState(0);

  // Fetch breeds once on mount
  useEffect(() => {
    fetchBreeds();
  }, [fetchBreeds]);

  return (
    <Page title="Adoption Records">

      {loading ? (
        <div className="text-center p-4">Loading breeds...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {adoptions.map(record => (
            <div className="border rounded shadow p-4 flex flex-col">
              {(record.breed.image?.url) && (
                <img
                  src={record.breed.image?.url}
                  alt={record.breed.name}
                  className="h-32 w-full object-cover rounded mb-2"
                />
              )}
              <h3 className="text-lg font-semibold mb-1">Name: {record.name}</h3>
              <h2 className="text-md font-semibold mb-1 text-right">Adopter: {record.adopterName}</h2>
              <p className="text-sm flex-1 mt-3">Adopted: {record.adoptionDate}</p>
              
            </div>
          ))}
        </div>
      )}
    </Page>
  );
};
