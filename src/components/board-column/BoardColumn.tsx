import { Droppable, Draggable } from 'react-beautiful-dnd'
import { FaPlus } from 'react-icons/fa'
import { useTheme } from '@/hooks/useTheme'
import { useTaskContext } from '@/hooks/useTaskContext'
import { Status } from '@/types/task'
import { Button } from '@/styles'
import { Container, BoardHeader, CardContainer } from './styles'
import Task from '@/components/task/Task'
import TaskForm from '@/components/task/TaskForm'

type Props = {
  status: Status
}

const BoardColumn = ({ status }: Props) => {
  const { themeStyles } = useTheme()
  const { currentStatus, isAdding, handleAdd, filterTasks } = useTaskContext()
  const filteredTasks = filterTasks(status)
  const isCurrentColumn = status === currentStatus
  return (
    <Container $themeStyles={themeStyles}>
      <BoardHeader>
        <h2>{status}</h2>
        <Button aria-label='add task' onClick={() => handleAdd(status)}>
          <FaPlus size={18} />
        </Button>
      </BoardHeader>
      <Droppable droppableId={status}>
        {(provided) => (
          <CardContainer {...provided.droppableProps} ref={provided.innerRef}>
            {filteredTasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => <Task key={task.id} {...task} {...provided} />}
              </Draggable>
            ))}
            {isAdding && isCurrentColumn && <TaskForm status={status} />}
            {provided.placeholder}
          </CardContainer>
        )}
      </Droppable>
    </Container>
  )
}

export default BoardColumn
