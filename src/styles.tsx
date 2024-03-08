import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 1rem;
  gap: 1rem;
`

export const BoardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(340px, 1fr));
  gap: 1rem;
  flex: 1;
  overflow: scroll;
`

export const Button = styled.button`
  border: none;
  background: none;
  color: inherit;
  font-size: inherit;

  svg {
    display: inherit;
    cursor: pointer;
  }
`
