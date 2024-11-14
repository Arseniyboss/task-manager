import { KeyboardEvent, useState, useRef } from 'react'
import { DraggableProvided } from 'react-beautiful-dnd'
import { FaTrashAlt } from 'react-icons/fa'
import { useTheme } from '@/hooks/useTheme'
import { useTaskContext } from '@/hooks/useTaskContext'
import { useAutoResizeTextArea } from '@/hooks/useAutosizeTextArea'
import { useUpdateEffect } from '@/hooks/useUpdateEffect'
import { Task as TaskProps } from '@/types/task'
import { Button } from '@/styles'
import { Card, TextArea } from './styles'

type Props = TaskProps & DraggableProvided

const Task = (props: Props) => {
  const { id, title, draggableProps, dragHandleProps, innerRef } = props

  const [task, setTask] = useState<string>(title)

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const { themeStyles } = useTheme()
  const { deleteTask, editTask } = useTaskContext()

  useAutoResizeTextArea(textareaRef, task)

  useUpdateEffect(() => {
    const trimmedTask = task.trim()
    if (!trimmedTask) return
    editTask(id, trimmedTask)
  }, [task])

  const handleEnter = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
  }
  return (
    <Card
      {...dragHandleProps}
      {...draggableProps}
      ref={innerRef}
      $themeStyles={themeStyles}
      data-testid="task"
    >
      <TextArea
        value={task}
        ref={textareaRef}
        rows={1}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleEnter}
        aria-label="edit task input"
        data-testid="edit-task-input"
      />
      <Button
        onClick={() => deleteTask(id)}
        aria-label="delete task"
        data-testid="delete-task-button"
      >
        <FaTrashAlt />
      </Button>
    </Card>
  )
}

export default Task
