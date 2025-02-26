import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from './redux/auth/authSelectors';
import authOperations from './redux/auth/operations';
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
const FavoritePage = lazy(() => import('./pages/FavoritePage'));
const AccountPage = lazy(() => import('./pages/AccountPage'));
const InfoPage = lazy(() => import('./pages/InfoPage'));
const PodcastPage = lazy(() => import('./pages/PodcastPage'));

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelector.selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(authOperations.fetchCurrentUser());
    }
  }, [dispatch, isLoggedIn]);

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
          <Route path="favorite" element={<FavoritePage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="info" element={<InfoPage />} />
          <Route path="podcast" element={<PodcastPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
