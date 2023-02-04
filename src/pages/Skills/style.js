import styled from 'styled-components'

export const SkillsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  gap: 30px;

  > div {
    width: 350px;
    transition: 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      scale: 1.5;
    }
  }
`
