import styled from 'styled-components'
import { FaPlus, FaTrashAlt } from 'react-icons/fa'

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

export const BoardColumn = styled.article`
  background: #f4f5f7;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  padding-bottom: 0.25rem;
  border-radius: 0.25rem;
  overflow-y: scroll;
`

export const BoardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Button = styled.button`
  border: none;
  background: none;
  color: inherit;
  font-size: inherit;
`

export const PlusIcon = styled(FaPlus)`
  cursor: pointer;
`

export const Trashcan = styled(FaTrashAlt)`
  display: inherit;
  cursor: pointer;
`

export const CardContainer = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Card = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-radius: 0.25rem;
  padding: 1rem;
  margin-bottom: 0.75rem;
`

export const TextArea = styled.textarea`
  border: none;
  outline: none;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  resize: none;
  width: 90%;
`
