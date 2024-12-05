'use client';

import { axiosInstance } from '@/lib/axios';
import { useEffect, useState } from 'react';

export const TestComponent = () => {
   const [data, setData] = useState(null);
   const [error, setError] = useState<string | null>(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axiosInstance.get(
               '/igdb/games?limit=1&offset=0',
            );

            setData(response.data);
         } catch (err) {
            console.error(err);
            setError('Failed to fetch data.');
         } finally {
            setLoading(false);
         }
      };

      fetchData();
   }, []);

   if (loading) return <div>Loading...</div>;
   if (error) return <div>Error: {error}</div>;

   return (
      <div className='bg-blue-200'>
         <h1>User Data</h1>
         <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
   );
};
