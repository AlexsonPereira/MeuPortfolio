import styled from 'styled-components'

export const ContactStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 50px;

  .groupItens {
    display: flex;
    flex-wrap: wrap;
    width: 360px;
    gap: 50px;
    margin-top: 50px;
    svg {
      font-size: 8rem;
      color: white;
    }
  }

  h3 {
    font-size: 2.5rem;
    color: white;
  }
`
