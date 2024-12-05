import { getSession } from '@/actions/getSession';
import axios from 'axios';

export const axiosInstance = axios.create({
   baseURL: process.env.NEXT_PUBLIC_API_URL,
   headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
   },
});

axiosInstance.interceptors.request.use(
   async (config) => {
      const session = await getSession();

      if (session?.accessToken) {
         config.headers.Authorization = `Bearer ${session.accessToken}`;
      }

      return config;
   },
   (error) => {
      return Promise.reject(error);
   },
);
