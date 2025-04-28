import { create } from 'zustand';
import { 
  ExampleSchema,
  ExampleRequest,
  UpdateExampleRequest
} from '../types/example.type';
import { 
  createExample,
  getExamples,
  updateExample
} from '../services/example.service';
import { APIError, GenericResponse } from '../helpers/http.helper';

interface ExampleState {
  examples: ExampleSchema[];
  currentExample: ExampleSchema | null;
  isLoading: boolean;
  error: string | null;
  fetchExamples: () => Promise<void>;
  createExample: (data: ExampleRequest) => Promise<void>;
  updateExample: (exampleId: string, data: UpdateExampleRequest) => Promise<void>;
  setCurrentExample: (example: ExampleSchema | null) => void;
}

export const useExampleStore = create<ExampleState>((set) => ({
  examples: [],
  currentExample: null,
  isLoading: false,
  error: null,
  
  fetchExamples: async () => {
    set({ isLoading: true, error: null });
    try {
      const response: GenericResponse<ExampleSchema[]> = await getExamples();
      set({ 
        examples: response.result,
        isLoading: false
      });
    } catch (error) {
      const apiError = error as APIError;
      set({ 
        error: apiError.response?.data?.detail || 'Failed to fetch examples', 
        isLoading: false
      });
    }
  },
  
  createExample: async (data) => {
    set({ isLoading: true, error: null });
    try {
      const response: GenericResponse<ExampleSchema> = await createExample(data);
      set((state) => ({ 
        examples: [...state.examples, response.result],
        isLoading: false
      }));
    } catch (error) {
      const apiError = error as APIError;
      set({ 
        error: apiError.response?.data?.detail || 'Failed to create example', 
        isLoading: false 
      });
    }
  },
  
  updateExample: async (exampleId, data) => {
    set({ isLoading: true, error: null });
    try {
      const response: GenericResponse<ExampleSchema> = await updateExample(exampleId, data);
      set((state) => ({ 
        examples: state.examples.map(example => 
          example.name === exampleId ? response.result : example
        ),
        currentExample: state.currentExample?.name === exampleId ? response.result : state.currentExample,
        isLoading: false 
      }));
    } catch (error) {
      const apiError = error as APIError;
      set({ 
        error: apiError.response?.data?.detail || 'Failed to update example', 
        isLoading: false 
      });
    }
  },
  
  setCurrentExample: (example) => {
    set({ currentExample: example });
  }
}));