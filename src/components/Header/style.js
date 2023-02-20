import styled from 'styled-components'

export const HeaderStyle = styled.div`
  background-color: var(--color-black);
  height: 80px;
  border-bottom: 2px solid var(--primary-color);
  color: var(--primary-color);
  display: flex;
  align-items: center;

  > div {
    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > h2 {
        font-size: 1.5rem;
        font-weight: bold;
        cursor: pointer;
        transition: 0.5s;

        :hover {
          opacity: 0.5;
        }
      }

      > div {
        > a {
          color: var(--primary-color);
        }
        display: flex;
        font-size: 2rem;
        gap: 15px;
      }
    }
  }
`

export const MenuNav = styled.div`
  background-color: transparent;
  /* border-left: 4px solid var(--primary-color);
  border-right: 4px solid var(--primary-color); */
  border-bottom: 2px solid var(--primary-color);
  border-radius: 0 0 8px 8px;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  > span {
    color: var(--primary-color);
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      scale: 1.2;
    }

    @media (max-width: 450px) {
      font-size: 1.5rem;
    }
  }
`
