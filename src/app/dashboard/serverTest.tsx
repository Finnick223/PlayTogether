import { axiosInstance } from '@/lib/axios';

export const ServerTestComponent = async () => {
   try {
      const response = await axiosInstance.get('/igdb/games?limit=1&offset=0');
      const data = response.data;

      return (
         <div className='bg-red-200'>
            <h1>User Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
         </div>
      );
   } catch (error) {
      console.error(error);
      return <div>Error: Failed to fetch data.</div>;
   }
};
