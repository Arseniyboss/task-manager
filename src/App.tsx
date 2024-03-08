import { DragDropContext } from 'react-beautiful-dnd'
import { useTaskContext } from './hooks/useTaskContext'
import { Container, Heading, BoardContainer } from './styles'
import BoardColumn from './components/board-column/BoardColumn'

const Home = () => {
  const { statuses, handleDrag } = useTaskContext()
  return (
    <Container>
      <Heading>Task Manager</Heading>
      <BoardContainer>
        <DragDropContext onDragEnd={handleDrag}>
          {statuses.map((status, index) => (
            <BoardColumn key={index} status={status} />
          ))}
        </DragDropContext>
      </BoardContainer>
    </Container>
  )
}

export default Home
