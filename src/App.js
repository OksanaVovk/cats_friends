import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCats } from './redux/cats/operations';
import { lazy } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { SharedLayout } from 'components/SharedLayout';
import theme from './styles';
import Loader from 'components/Loader';
import { catsSelectors } from './redux/cats/catsSelectors';

const MainPage = lazy(() => import('./pages/MainPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCats());
  }, [dispatch]);

  const isLoading = useSelector(catsSelectors.selectCatsIsLoading);

  return (
    <ThemeProvider theme={theme}>
      {isLoading && <Loader />}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
