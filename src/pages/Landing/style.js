import styled from 'styled-components'
import back from '../../assets/background.jpg'

export const Background = styled.div`
  background-image: url(https://uploads-ssl.webflow.com/5f22d3200e71bc31364b77b1/60f9bc461f8ffd5586cb8f8a_Programa%C3%A7%C3%A3o%20para%20microcontroladores-p-1600.jpeg);
  background-size: cover;
  width: 100vw;
  height: 100vh;

  > div:nth-child(1) {
    background-color: var(--color-black-bg);
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    flex-direction: column;

    > p {
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
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    > svg {
      color: var(--primary-color);
      font-size: 10rem;
      cursor: pointer;
      animation: infinite 1s;
    }

    > p {
      color: var(--color-white);
      font-size: 2rem;
      font-weight: 200;
    }
  }
`
