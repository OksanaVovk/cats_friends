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
import { Toaster } from 'react-hot-toast';

const MainPage = lazy(() => import('./pages/MainPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const VolonteersPage = lazy(() => import('./pages/VolonteersPage.js'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCats());
  }, [dispatch]);

  const isLoading = useSelector(catsSelectors.selectCatsIsLoading);

  return (
    <ThemeProvider theme={theme}>
      {isLoading && <Loader />}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            zIndex: 9999,
          },
        }}
      />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="volonteers" element={<VolonteersPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
