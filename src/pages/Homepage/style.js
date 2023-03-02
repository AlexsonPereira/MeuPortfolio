import styled from 'styled-components'
import img from '../../assets/UserPhoto.png'

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 1rem;
    align-items: center;
  }

  > div:nth-child(1) {
    width: 450px;
    height: 450px;
    background-image: url(${img});
    background-size: cover;
    border-radius: 25px;
  }

  > div:nth-child(2) {
    color: var(--color-white);
    width: 60%;
    @media (max-width: 768px) {
      width: 100%;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    > p {
      font-size: 5rem;
      font-weight: bold;
      @media (max-width: 768px) {
        font-size: 2rem;
      }
      @media (max-width: 1230px) {
        font-size: 3rem;
        margin-left: 20px;
      }

      > span {
        color: var(--color-white);
      }
    }
  }
`
