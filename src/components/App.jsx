import { Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Layout from './outlet/outlet.jsx';


const Home = lazy(() => import('./home/home.jsx'));
const Movies = lazy(() => import('./movies/movies.jsx'));
const SelectedMovie = lazy(() => import('./detail/detail.jsx'));
const Cast = lazy(() => import('./cast/cast.jsx'));
const Reviews = lazy(() => import('./reviews/reviews.jsx'));


export const App = () => {
  //goit-react-hw-05-movies
  return (
    <div>
      
      
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
      
      
      
    </div>
  );
};
