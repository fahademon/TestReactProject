export interface Breed {
  id: string;
  name: string;
  temperament: string;
  life_span: string;
  weight: {
    imperial: string;
    metric: string;
  };
  origin?: string;
  description?: string;
  image?: CatImage;
  reference_image_id?: string
  [key: string]: any
}

export interface CatImage {
  id: string;
  url: string;
}

export interface AdoptionRecord {
  breed: Breed;
  adopterName: string;
  adoptionDate: string;    // ISO date string
  name: string;
}