import styled from 'styled-components'

export const ContactStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 50px;

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 1000px) {
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  .groupItens {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 360px;
    gap: 50px;
    margin-top: 50px;
    svg {
      font-size: 8rem;
      color: white;
    }

    @media (max-width: 1000px) {
      align-self: center;
      justify-content: center;
    }
  }

  h3 {
    font-size: 2.5rem;
    color: white;
  }
`
