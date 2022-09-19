import { Navigate, Route, Routes } from 'react-router-dom';

import { Navbar } from "../../ui";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";

type Props = {}
export const HeroesRoutes = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='marvel' element={<MarvelPage />}></Route>
          <Route path='dc' element={<DcPage />}></Route>
          <Route path='/' element={<Navigate to="/marvel" />}></Route>
          {/*  Search y HeroById */}
          <Route path='search' element={<SearchPage />}></Route>
          <Route path='hero/:id' element={<HeroPage />}></Route>
        </Routes>       
      </div>
    </>
  )
}