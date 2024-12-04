import { getSession } from '../../actions/getSession';

export default async function DashboardPage() {
   const session = await getSession();

   if (!session.isLoggedIn) {
      return <p>Redirecting to login...</p>;
   }

   return (
      <div>
         <h1>Welcome to the Dashboard!</h1>
         <p>Your token: {session.accessToken}</p>
      </div>
   );
}
