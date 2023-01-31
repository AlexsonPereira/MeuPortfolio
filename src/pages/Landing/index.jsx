import { Background } from "./style"
import { MdKeyboardArrowDown } from "react-icons/md"
import { IoIosArrowDown } from "react-icons/io"
import { Navigate, useNavigate } from "react-router"

export const LandingPage = () => {
   const navigate = useNavigate()
   return (
      <Background>
         <div><p>Olá, me chamo <span>Alexson Pereira</span>.</p> <p>Sou Desenvolvedor Front End</p></div>
         <div>
            <p>Veja mais sobre mim</p>
            <IoIosArrowDown onClick={()=> navigate("/home")}/>
         </div>
      </Background>
   )
}