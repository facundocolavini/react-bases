import { Navigate, Route, Routes } from "react-router-dom"
import { JournalPage } from "../pages/JournalPage"

type Props = {}
export const  JournalRoutes = (props: Props) => {
  return (
    <Routes>
      <Route path='/'  element={<JournalPage/>}/>
      <Route path='/*'  element={<Navigate to="/"/>}/>
    </Routes>
  )
}