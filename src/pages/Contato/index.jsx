import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs"
import Wave from "react-wavify"
import { Container } from "../../components/Container/style"
import { FormContact } from "../../components/FormContact"
import { HeaderPage } from "../../components/Header"
import { ContactStyled } from "./style"
import { motion } from "framer-motion"
export const ContactPage = () => {
   return (
      <>
         <HeaderPage/>
         <Container>
         <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, bounce : 1 }}
          >
               <ContactStyled>
                  <div>
                     <h3>Entre em contato comigo:</h3>
                     <div className="groupItens">
                        <a target="_blank" href="https://github.com/AlexsonPereira"><BsGithub/></a>                   
                        <a target="_blank" href="https://api.whatsapp.com/send?phone=5577991900273&text=Ol%C3%A1,%20%F0%9F%91%8B"><BsWhatsapp/></a>                     
                        <a target="_blank" href="https://www.linkedin.com/in/alexsonpereira/"><BsLinkedin/></a>                     
                        <a target="_blank" href="https://www.instagram.com/alexson_010/"><BsInstagram/></a>
                     </div>
                  </div>
                  {/* <FormContact/> */}
               </ContactStyled>
            
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