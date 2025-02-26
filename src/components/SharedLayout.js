import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Box } from '@mui/material';
import Loader from 'components/Loader';
import Footer from 'components/Footer';
import Header from 'components/Header';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Box>
        <Suspense fallback={<Loader />}>
          <Box sx={{ minHeight: '100vh' }}>
            <Outlet />
          </Box>
          <Footer />
        </Suspense>
      </Box>
    </>
  );
};
