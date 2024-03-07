import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useTaskContext } from './hooks/useTaskContext'
import {
  Container,
  BoardContainer,
  BoardColumn,
  BoardHeader,
  Button,
  PlusIcon,
  CardContainer,
} from './styles'
import Task from './components/Task'
import TaskForm from './components/TaskForm'

const Home = () => {
  const {
    statuses,
    currentStatus,
    isAdding,
    handleDrag,
    handleAdd,
    filterTasks,
  } = useTaskContext()
  return (
    <Container>
      <h1>Task Manager</h1>
      <BoardContainer>
        <DragDropContext onDragEnd={handleDrag}>
          {statuses.map((status, index) => (
            <BoardColumn key={index}>
              <BoardHeader>
                <h2>{status}</h2>
                <Button aria-label='add task' onClick={() => handleAdd(status)}>
                  <PlusIcon size={18} />
                </Button>
              </BoardHeader>
              <Droppable droppableId={status}>
                {(provided) => (
                  <CardContainer
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {filterTasks(status).map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided) => (
                          <Task key={task.id} {...task} {...provided} />
                        )}
                      </Draggable>
                    ))}
                    {isAdding && currentStatus === status && (
                      <TaskForm status={status} />
                    )}
                    {provided.placeholder}
                  </CardContainer>
                )}
              </Droppable>
            </BoardColumn>
          ))}
        </DragDropContext>
      </BoardContainer>
    </Container>
  )
}

export default Home
