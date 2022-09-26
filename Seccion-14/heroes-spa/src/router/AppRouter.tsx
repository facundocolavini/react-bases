import { Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../auth';
import { HeroesRoutes } from '../heroes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

type Props = {}

export const AppRouter = (props: Props) => {
  return (
    <>
      <Routes>
        <Route path='auth/*' element={
         <PublicRoute>
            <AuthRoutes />
          </PublicRoute>
        }/>

        <Route path='/*' element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>}
        />
       
      </Routes> 
    </>
  )
}