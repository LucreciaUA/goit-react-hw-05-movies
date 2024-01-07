import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Layout = lazy(() => import('./outlet/outlet'));
const Home = lazy(() => import('./home/home'));
const Movies = lazy(() => import('./movies/movies'));
const SelectedMovie = lazy(() => import('./detail/detail'));
const Cast = lazy(() => import('./cast/cast'));
const Reviews = lazy(() => import('./reviews/reviews'));


export const App = () => {
  //goit-react-hw-05-movies
  return (
    <div>
      
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home/>} />
              <Route path='movies' element={<Movies />} />
              <Route path='movies/:movieId' element={<SelectedMovie/>}>
                <Route path='cast' element={<Cast/>} />
                <Route path='reviews' element={<Reviews/>} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      
      
    </div>
  );
};
