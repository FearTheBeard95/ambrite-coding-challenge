import Challenge1 from '../components/pages/Challenge1';
import Challenge2 from '../components/pages/Challenge2';
import Challenge3 from '../components/pages/Challenge3';
import Docs from '../components/pages/Docs';

const routes = [
  {
    key: 'Docs',
    path: '/',
    element: <Docs />,
  },
  {
    key: 'Challenge1',
    path: '/c1',
    element: <Challenge1 />,
  },
  {
    key: 'Challenge2',
    path: '/c2',
    element: <Challenge2 />,
  },
  {
    key: 'Challenge3',
    path: '/c3',
    element: <Challenge3 />,
  },
];

export default routes;
