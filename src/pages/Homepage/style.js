import styled from 'styled-components'
import img from '../../assets/UserPhoto.png'

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 100px;

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

    > p {
      font-size: 5rem;
      font-weight: bold;

      > span {
        color: var(--primary-color);
      }
    }
  }
`
