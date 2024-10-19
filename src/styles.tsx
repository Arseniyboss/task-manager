import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  padding: 1rem;
  gap: 1rem;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const BoardWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(340px, 1fr));
  gap: 1rem;
  height: 100%;
  overflow-x: auto;
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
