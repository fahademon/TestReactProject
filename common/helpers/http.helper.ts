import { AxiosRequestHeaders } from 'axios';

import axiosObject from './config';
// exporting globally.
export { axiosObject } from './config';
export enum HttpMethods {
    POST = "post",
    GET = "get",
    PUT = "put",
    DELETE = "delete",
}

export interface GenericResponse<DataType> {
    error?: ErrorSchema;
    response?: ResponseSchema;
    result: DataType;
}

export interface ErrorSchema {
    status_code: number;
    detail?: any;
    headers?: Record<string, string>;
}

export interface ResponseSchema {
    [key: string]: any;
}

export interface APIError {
    response?: {
        data?: {
            detail?: string;
            error?: ErrorSchema;
            response?: ResponseSchema;
        };
    };
}

export const baseURL = 'http://localhost:8002';

export type MakeRequest = {
    url: string;
    method: HttpMethods;
    data?: unknown;
    params?: unknown;
    headers?: AxiosRequestHeaders;
    signal?: AbortSignal;
    onUploadProgress?: any;
};

export const makeRequest = async (req: MakeRequest) => {
    const { url, method, data, params, headers, signal, onUploadProgress } = req;

    return axiosObject({
        url: baseURL + url,
        method,
        data,
        params,
        headers,
        signal,
        onUploadProgress,
    }).then((res: any) => {
        return res.data;
    });
}; 