import { Route, Routes } from "react-router-dom"
import { ContactPage } from "../pages/Contato"
import { HomePage } from "../pages/Homepage"
import { LandingPage } from "../pages/Landing"
import { Projects } from "../pages/Projects"
import { SkillsPage } from "../pages/Skills"

export const RoutesMain = () => {
   return(
      <Routes>
         <Route path="/"  element={<LandingPage/>}/>
         <Route path="/home" element={<HomePage/>}/>
         <Route path="/skills" element={<SkillsPage/>}/>
         <Route path="/projects" element={<Projects/>}/>
         <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
   )
}