import { getSession } from '../../actions/getSession';
import { ServerTestComponent } from './serverTest';
import { TestComponent } from './test';

export default async function DashboardPage() {
   const session = await getSession();
   return (
      <div>
         <h1>Welcome to the Dashboard!</h1>
         <p>Your token: {session.accessToken}</p>
         <p>client side</p>
         <TestComponent />
         <p>server side</p>
         <ServerTestComponent />
      </div>
   );
}
