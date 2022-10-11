import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { useCheckAuth } from '../hooks';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { RootState } from '../store';
import { authState } from '../store/auth';
import { CheckingAuth } from '../ui';


export const AppRouter = ():JSX.Element => {
  const { status } = useCheckAuth();

  
  if (status === 'checking-credentials'){
    return <CheckingAuth />
  }

  return (
    <>
      <Routes>
        {status === 'authenticated' 
          ? <Route path='/*'  element={<JournalRoutes/>}/>   
          : <Route path='auth/*' element={<AuthRoutes/>}/> 
        }
        <Route path='/*' element={<Navigate to="auth/login"/>}/> 
        {/* Login y Registro Public route */}
       
        {/* JournalApp Private Routes*/}
  
      </Routes>
    </>

  )
}