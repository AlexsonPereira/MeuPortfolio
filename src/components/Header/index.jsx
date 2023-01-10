import { Container } from '../Container/style'
import { HeaderStyle, MenuNav } from './style'
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs"

export const HeaderPage = () => {
  return (
    <>
      <HeaderStyle>
          <Container>
              <div>
                  <h2>AlexsonDeveloper</h2>
                  <div>
                    <a target="_blank" href=""><BsWhatsapp/></a>
                    <a target="_blank" href=""><BsGithub/></a>
                    <a target="_blank" href=""><BsLinkedin/></a>
                  </div>
              </div>
          </Container>
      </HeaderStyle>
      <Container>
          <MenuNav>
            <span>Projetos</span>
            <span>Skills</span>
            <span>Contato</span>
          </MenuNav>
      </Container>
    </>
  
  )
  
}
