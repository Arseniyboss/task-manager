import { useState, useRef } from 'react'
import { DraggableProvided } from 'react-beautiful-dnd'
import { FaTrashAlt } from 'react-icons/fa'
import { useTaskContext } from '@/hooks/useTaskContext'
import { useAutoResizeTextarea } from '@/hooks/useAutosizeTextArea'
import { useUpdateEffect } from '@/hooks/useUpdateEffect'
import { Button } from '@/styles'
import { Card, TextArea } from './styles'
import { Task as TaskProps } from '@/types'

type Props = TaskProps & DraggableProvided

const Task = (props: Props) => {
  const { id, title, draggableProps, dragHandleProps, innerRef } = props

  const [task, setTask] = useState<string>(title)

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const { deleteTask, editTask } = useTaskContext()

  useAutoResizeTextarea(textareaRef, task)

  useUpdateEffect(() => {
    const trimmedTask = task.trim()
    if (!trimmedTask) return
    editTask(id, trimmedTask)
  }, [task])

  return (
    <Card {...dragHandleProps} {...draggableProps} ref={innerRef}>
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
