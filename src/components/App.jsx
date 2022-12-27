import { lazy } from 'react';
import { GlobalStyle } from 'constanse/GlobalStyle';

import { ToastContainer } from 'react-toastify';
import { Route, Routes, Navigate } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout';
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));

const MovieInfo = lazy(() => import('./MovieInfo/MovieInfo'));
const MovieCast = lazy(() => import('./MovieInfo/Cast'));
const MovieReview = lazy(() => import('./MovieInfo/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInfo />}>
            <Route path="credits" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReview />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <GlobalStyle />
      <ToastContainer autoClose={2000} />
    </>
  );
};
