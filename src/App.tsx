import { DragDropContext } from '@hello-pangea/dnd'
import { useTheme } from './hooks/useTheme'
import { useTaskContext } from './hooks/useTaskContext'
import { Container, Header, BoardWrapper } from './styles'
import GlobalStyle from './GlobalStyle'
import ThemeSwitcher from './components/theme-switcher/ThemeSwitcher'
import BoardColumn from './components/board-column/BoardColumn'

const App = () => {
  const { themeStyles } = useTheme()
  const { statuses, handleDrag } = useTaskContext()
  return (
    <>
      <GlobalStyle themeStyles={themeStyles} />
      <Container>
        <Header>
          <h1>Task Manager</h1>
          <ThemeSwitcher />
        </Header>
        <BoardWrapper>
          <DragDropContext onDragEnd={handleDrag}>
            {statuses.map((status, index) => (
              <BoardColumn key={index} status={status} />
            ))}
          </DragDropContext>
        </BoardWrapper>
      </Container>
    </>
  )
}

export default App
