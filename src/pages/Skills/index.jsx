import Wave from "react-wavify"
import { Container } from "../../components/Container/style"
import { HeaderPage } from "../../components/Header"
import { skills } from "./skills"
import { SkillsDiv } from "./style"
import { motion } from "framer-motion"


export const SkillsPage = () => {
   return (
      <>
         <HeaderPage/>
         <Container>
         <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, bounce : 1 }}
          >
            <SkillsDiv>
               {
                  skills.map(e => 
                  <div key={e.name}>
                     <img src={e.url} alt={e.name} />
                  </div>
                  )
               }

            </SkillsDiv>
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