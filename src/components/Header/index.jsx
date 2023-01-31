import { Container } from '../Container/style'
import { HeaderStyle, MenuNav } from './style'
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs"
import { useNavigate } from 'react-router'

export const HeaderPage = () => {
  const navigate = useNavigate() 
  return (
    <>
      <HeaderStyle>
          <Container>
              <div>
                  <h2 onClick={()=> navigate("/home")}>AlexsonDeveloper</h2>
                  <div>
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=5577991900273&text=Ol%C3%A1,%20%F0%9F%91%8B"><BsWhatsapp/></a>
                    <a target="_blank" href="https://github.com/AlexsonPereira"><BsGithub/></a>
                    <a target="_blank" href="https://www.linkedin.com/in/alexsonpereira/"><BsLinkedin/></a>
                  </div>
              </div>
          </Container>
      </HeaderStyle>
      <Container>
          <MenuNav>
            <span onClick={()=> navigate("/projects")}>Projetos</span>
            <span onClick={()=> navigate("/skills")}>Skills</span>
            <span onClick={()=> navigate("/contact")}>Contato</span>
          </MenuNav>
      </Container>
    </>
  
  )
  
}
