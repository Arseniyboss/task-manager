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
  const { isAdding, isCurrentColumn, handleAdd, filterTasks } = useTaskContext()
  const filteredTasks = filterTasks(status)
  return (
    <Container $themeStyles={themeStyles}>
      <BoardHeader>
        <h2>{status}</h2>
        <Button
          onClick={() => handleAdd(status)}
          aria-label='add task'
          data-testid='add-task-button'
        >
          <FaPlus size={18} />
        </Button>
      </BoardHeader>
      <Droppable droppableId={status}>
        {(provided) => (
          <CardContainer
            {...provided.droppableProps}
            ref={provided.innerRef}
            data-testid='task-list'
          >
            {filteredTasks.map((task, index) => (
              <Draggable
                key={task.id}
                index={index}
                draggableId={task.id}
                isDragDisabled={isAdding}
              >
                {(provided) => <Task key={task.id} {...task} {...provided} />}
              </Draggable>
            ))}
            {isAdding && isCurrentColumn(status) && (
              <TaskForm status={status} />
            )}
            {provided.placeholder}
          </CardContainer>
        )}
      </Droppable>
    </Container>
  )
}

export default BoardColumn
