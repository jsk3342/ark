import axios from 'axios';
import { QueryClient } from 'react-query';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const TOKEN = process.env.REACT_APP_JWT;

export const initFetchInstance = (URL:string) =>
  axios.create({
    baseURL: BASE_URL + URL,
    timeout: 10000,
    headers: {
      Accept: 'application/json',
      authorization: `bearer ${TOKEN}`,
    },
  });

export const fetchInstance = () => initFetchInstance('');

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      suspense: true,
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    },
  },
});
