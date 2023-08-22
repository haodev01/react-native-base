import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 1000,
});
axiosClient.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    config.headers.Authorization = 'Token';
    return config;
  },
  function (error: AxiosError): Promise<AxiosError> {
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  function (response: AxiosResponse): AxiosResponse {
    return response;
  },
  function (error: AxiosError): Promise<AxiosError> {
    return Promise.reject(error);
  },
);

export default axiosClient;
