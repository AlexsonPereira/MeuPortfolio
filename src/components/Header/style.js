import styled from 'styled-components'

export const HeaderStyle = styled.div`
  background-color: var(--color-black);
  height: 80px;
  border-bottom: 5px solid var(--primary-color);
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
  background-color: var(--primary-color);
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  > span {
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      transition: 0.5s;
      text-decoration: underline;
    }
  }
`
