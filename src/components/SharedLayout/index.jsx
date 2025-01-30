import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};
