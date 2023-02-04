import Wave from "react-wavify"
import { Container } from "../../components/Container/style"
import { HeaderPage } from "../../components/Header"
import { skills } from "./skills"
import { SkillsDiv } from "./style"

export const SkillsPage = () => {
   return (
      <>
         <HeaderPage/>
         <Container>
            <SkillsDiv>
               {
                  skills.map(e => 
                  <div>
                     <img src={e.url} alt={e.name} />

                  </div>
                  )
               }

            </SkillsDiv>
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