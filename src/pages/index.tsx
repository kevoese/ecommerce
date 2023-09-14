import { ReactElement } from 'react';
import ThriveHome from '../components/ThriveHome';
import {
  getHomeDataInternal,
} from '../components/ThriveHome/utils';

const Home = () => (
  <main className={'thrive-home font-worksans w-screen'}>
    <ThriveHome
    />
  </main>
);

// Home.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <div>
//       <Layout>
//         {page}
//       </Layout>
//     </div>
//   );
// };

export default Home;
