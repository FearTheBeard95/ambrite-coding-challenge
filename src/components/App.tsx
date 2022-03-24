import '../App.less';
import { Route, Routes } from 'react-router-dom';
import NavRoutes from '../constants/routes';

const App = () => {
  return (
    <>
      <Routes>
        {NavRoutes.map((route) => (
          <Route {...route} />
        ))}
      </Routes>
    </>
  );
};

export default App;
