import Wave from "react-wavify"
import { Container } from "../../components/Container/style"
import { HeaderPage } from "../../components/Header"
import { MainContent } from "./style"

export const HomePage = () => {
  return (
    <>
      <HeaderPage/>
      <Container>
        <MainContent>
          <div></div>
          <div><p>Prazer, meu nome é <span>Alexson Pereira Oliveira</span> tenho 18 anos e sou Desenvolvedor Front End Junior</p></div>
        </MainContent>
      </Container>
      <Wave className='Wave' fill='#FFE600'
        paused={false}
        options={{
          height: 100,
          amplitude: 100,
          speed: 0.15,
          points: 3
        }}
      />
    </>
  )
}
