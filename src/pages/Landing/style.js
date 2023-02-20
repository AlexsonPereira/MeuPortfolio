import styled, { keyframes } from 'styled-components'
import back from '../../assets/background.jpg'

const movingAnimation = keyframes`
  0% { transform: translateY(-10px) }
  100% { transform: translateY(0px) }
`

export const Background = styled.div`
  background-image: url(https://uploads-ssl.webflow.com/5f22d3200e71bc31364b77b1/60f9bc461f8ffd5586cb8f8a_Programa%C3%A7%C3%A3o%20para%20microcontroladores-p-1600.jpeg);
  background-size: cover;
  width: 100vw;
  height: 100vh;

  > div {
    background-color: var(--color-black-bg);
    > div {
      > div:nth-child(1) {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 4rem;
        flex-direction: column;

        > p {
          @media (max-width: 510px) {
            font-size: 3rem;
          }
          color: var(--color-white);
          font-weight: bold;

          > span {
            color: var(--primary-color);
          }
        }
      }

      div:nth-child(2) {
        position: fixed;
        bottom: 0;
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;

        > svg {
          color: var(--primary-color);
          font-size: 10rem;
          cursor: pointer;
          animation: ${movingAnimation} alternate-reverse infinite 1s;
        }

        > p {
          color: var(--color-white);
          font-size: 2rem;
          font-weight: 200;
        }
      }
    }
  }
`
