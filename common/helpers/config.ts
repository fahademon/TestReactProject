import axios, { InternalAxiosRequestConfig } from 'axios';
import { refreshToken as refreshTokenService } from '../services/catAPI';

// Set config defaults when creating the instance
export const axiosObject = axios.create();
    
axiosObject.interceptors.request.use(
    async function (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> {
        // Do something before request is sent
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        
        // Skip token check if request is for refresh token endpoint
        if (!config.url?.includes('/user/refresh-token') && accessToken && refreshToken) {
            try {
                const decodedToken = JSON.parse(atob(accessToken.split('.')[1]));
                if (decodedToken.exp) {
                    const expirationTime = decodedToken.exp * 1000; // Convert to milliseconds
                    
                    if (Date.now() >= expirationTime && refreshToken) {
                        // Token is expired, try to refresh
                        const response = await refreshTokenService({ refresh_token: refreshToken });
                        if (response?.result?.access_token) {
                            localStorage.setItem('accessToken', response.result.access_token);
                            localStorage.setItem('refreshToken', response.result.refresh_token);
                        } else {
                            localStorage.removeItem('accessToken');
                            localStorage.removeItem('refreshToken');
                            console.error('Failed to refresh token');
                        }
                    }
                }
            } catch (error) {
                console.error('Error checking token expiration:', error);
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
            }
        }
        
        // Update the Authorization header directly on the config object
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },
    function (error) {
        // Do something with request error
        console.error('error: interceptors', error);
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosObject.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        return Promise.reject(error);
    }
);

export default axiosObject; 