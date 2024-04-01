import { DragDropContext } from 'react-beautiful-dnd'
import { useTheme } from './hooks/useTheme'
import { useTaskContext } from './hooks/useTaskContext'
import { Container, Header, BoardContainer } from './styles'
import GlobalStyle from './GlobalStyle'
import ThemeIcons from './components/theme-icons/ThemeIcons'
import BoardColumn from './components/board-column/BoardColumn'

const Home = () => {
  const { themeStyles } = useTheme()
  const { statuses, handleDrag } = useTaskContext()
  return (
    <>
      <GlobalStyle themeStyles={themeStyles} />
      <Container>
        <Header>
          <h1>Task Manager</h1>
          <ThemeIcons />
        </Header>
        <BoardContainer>
          <DragDropContext onDragEnd={handleDrag}>
            {statuses.map((status, index) => (
              <BoardColumn key={index} status={status} />
            ))}
          </DragDropContext>
        </BoardContainer>
      </Container>
    </>
  )
}

export default Home
