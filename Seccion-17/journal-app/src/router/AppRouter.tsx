import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';




export const AppRouter = ():JSX.Element => {
  return (
    <>
      <Routes>
        {/* Login y Registro Public route */}
        <Route path='auth/*' element={<AuthRoutes/>}/> 
        {/* JournalApp Private Routes*/}
        <Route path='/*'  element={<JournalRoutes/>}/>    
      </Routes>
    </>

  )
}