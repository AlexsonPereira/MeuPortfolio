import styled from 'styled-components'

export const HeaderStyle = styled.div`
  background-color: var(--color-black);
  height: 100px;
  border-bottom: 5px solid var(--color-white);
  display: flex;
  align-items: center;
  padding: 0 25px;

  > div > div {
    display: flex;
    justify-content: space-between;

    span {
      color: var(--color-white);
      font-size: 2rem;
    }
  }
`
