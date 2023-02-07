import { FormStyled } from "./style"

export const FormContact = () => {
   return (
      <FormStyled>
         <label >Nome:</label>
         <input placeholder="Digite seu nome" type="text" />
         <label>Email:</label>
         <input placeholder="Digite seu email" type="text" />
         <label>Messagem:</label>
         <textarea placeholder="Escreva aqui sua mensagem"/>
      </FormStyled>
   )
}