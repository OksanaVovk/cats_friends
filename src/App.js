import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { SharedLayout } from 'components/SharedLayout';
import theme from './styles';

const MainPage = lazy(() => import('./pages/MainPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));

function App() {
  return (
    <ThemeProvider theme={theme}>
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
