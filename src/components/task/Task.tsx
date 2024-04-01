import { useState, useRef } from 'react'
import { DraggableProvided } from 'react-beautiful-dnd'
import { FaTrashAlt } from 'react-icons/fa'
import { useTheme } from '@/hooks/useTheme'
import { useTaskContext } from '@/hooks/useTaskContext'
import { useAutoResizeTextarea } from '@/hooks/useAutosizeTextArea'
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

  useAutoResizeTextarea(textareaRef, task)

  useUpdateEffect(() => {
    const trimmedTask = task.trim()
    if (!trimmedTask) return
    editTask(id, trimmedTask)
  }, [task])

  return (
    <Card
      {...dragHandleProps}
      {...draggableProps}
      ref={innerRef}
      $themeStyles={themeStyles}
    >
      <TextArea
        value={task}
        ref={textareaRef}
        rows={1}
        onChange={(e) => setTask(e.target.value)}
        aria-label='edit task input'
      />
      <Button aria-label='delete task' onClick={() => deleteTask(id)}>
        <FaTrashAlt />
      </Button>
    </Card>
  )
}

export default Task
