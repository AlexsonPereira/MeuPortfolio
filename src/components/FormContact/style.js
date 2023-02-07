import styled from 'styled-components'

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  color: white;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  padding: 48px 64px;
  border-radius: 8px;

  label {
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 0.8rem;
  }

  input {
    padding: 8px;
    width: 400px;
    height: 40px;
    border-radius: 4px;
    outline: none;
  }

  textarea {
    border-radius: 4px;
    max-width: 400px;
    min-width: 400px;
    max-height: 250px;
    min-height: 250px;
    outline: none;
    padding: 8px;
  }
`
