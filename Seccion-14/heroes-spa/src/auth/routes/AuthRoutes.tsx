import { Route, Routes } from 'react-router-dom';

import { LoginPage, SingupPage } from "../../auth";
import { Navbar } from "../../ui";


type Props = {}
export const AuthRoutes = (props: Props) => {
  return (
    <>
      <div className="container">
        <Routes>
            <Route path='/' element={<LoginPage />}></Route>
            <Route path='singup' element={<SingupPage />}></Route>
            <Route path='login' element={<LoginPage />}></Route>
        </Routes>       
      </div>
    </>
  )
}