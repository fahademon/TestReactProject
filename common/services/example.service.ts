import { HttpMethods, makeRequest } from '../helpers/http.helper';
import { 
  ExampleRequest, 
  UpdateExampleRequest
} from '../types/example.type';

export const createExample = (data: ExampleRequest) => {
  return makeRequest({
    url: "/example",
    method: HttpMethods.POST,
    data,
  });
};

export const getExamples = () => {
  return makeRequest({
    url: "/example",
    method: HttpMethods.GET,
  });
};

export const updateExample = (exampleId: string, data: UpdateExampleRequest) => {
  return makeRequest({
    url: `/example/${exampleId}`,
    method: HttpMethods.PUT,
    data,
  });
};
