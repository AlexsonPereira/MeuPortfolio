import Wave from "react-wavify"
import { Container } from "../../components/Container/style"
import { HeaderPage } from "../../components/Header"
import { MainContent } from "./style"
import { motion } from "framer-motion"


export const HomePage = () => {
  // window.addEventListener('resize', ()=>{console.log(window.screen.height) });
  return (
    <>
      <HeaderPage/>
      <Container>
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, bounce : 1 }}
          >
        <MainContent>
          <div></div>
          <div><p>Prazer, meu nome é <span>Alexson Pereira Oliveira</span> tenho 18 anos e sou Desenvolvedor Front End</p></div>
        </MainContent>
        </motion.div>
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
