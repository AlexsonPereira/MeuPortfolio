import { Carrousel } from "../../components/Carrousel"
import { HeaderPage } from "../../components/Header"
import { Container } from "../../components/Container/style";
import Wave from "react-wavify";
import { ContainerCarrousel } from "./style";

export const Projects = () => {
  return (
    <>
      <HeaderPage/>
        <Container>
          <ContainerCarrousel>
            <Carrousel/>  
          </ContainerCarrousel>
        </Container>
      <Wave className='Wave' fill='#FFFFFF'
        paused={false}
        options={{
          height : 100 ,
          amplitude: 100,
          speed: 0.15,
          points: 3
        }}
      />
    </>
  )
}
