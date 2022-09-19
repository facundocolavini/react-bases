import { Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../auth';
import { HeroesRoutes } from '../heroes';

type Props = {}

export const AppRouter = (props: Props) => {
  return (
    <>
      <Routes>
        <Route path='auth/*' element={<AuthRoutes />}></Route>
        <Route path='/*' element={<HeroesRoutes />}></Route>
      </Routes> 
    </>
  )
}