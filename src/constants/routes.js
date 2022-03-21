import Challenge1 from '../components/pages/Challenge1';
import Challenge2 from '../components/pages/Challenge2';
import Challenge3 from '../components/pages/Challenge3';
import Home from '../components/pages/Home';

const routes = [
  {
    key: 'Home',
    path: '/',
    element: <Home />,
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
