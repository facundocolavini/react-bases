import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { Navbar } from './components/Navbar';
import { UserProvider } from './context/UserProvider';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';

interface MainApp {

}

export const MainApp: React.FC<MainApp> = () => {
  return (
  <UserProvider>
    <Navbar />
    <hr/>
    <Routes>
      <Route  path="/" element={<HomePage/>} />
      <Route  path="/about" element={<AboutPage/>} />
      <Route  path="/login" element={<LoginPage/>} />
      {/* <Route  path="/*" element={<LoginPage/>} /> */}
      <Route  path="/*" element={<Navigate to="about "/>} />
    </Routes>
  </UserProvider>
  )
}
