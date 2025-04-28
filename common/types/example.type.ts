export interface ExampleSchema {
  name: string;
  description: string;
}


export interface ExampleRequest {
  name: string;
  description: string;
}

export interface UpdateExampleRequest {
  name?: string;
  description?: string;
}