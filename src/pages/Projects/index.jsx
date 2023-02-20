import { Carrousel } from "../../components/Carrousel"
import { HeaderPage } from "../../components/Header"
import { Container } from "../../components/Container/style";
import Wave from "react-wavify";
import { ContainerCarrousel } from "./style";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <>
      <HeaderPage/>
        <Container>
          <ContainerCarrousel>
          <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, bounce : 1 }}
          >
            <Carrousel/>  
            </motion.div>
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
