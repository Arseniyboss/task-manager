import { useState, useRef } from 'react'
import { DraggableProvided } from 'react-beautiful-dnd'
import { FaTrashAlt } from 'react-icons/fa'
import { useTaskContext } from '@/hooks/useTaskContext'
import { useAutosizeTextArea } from '@/hooks/useAutosizeTextArea'
import { useUpdateEffect } from '@/hooks/useUpdateEffect'
import { Button } from '@/styles'
import { Card, TextArea } from './styles'
import { Task as TaskProps } from '@/types'

type Props = TaskProps & DraggableProvided

const Task = (props: Props) => {
  const { id, title, draggableProps, dragHandleProps, innerRef } = props

  const [task, setTask] = useState<string>(title)

  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const { deleteTask, editTask } = useTaskContext()

  useAutosizeTextArea(textAreaRef, task)

  useUpdateEffect(() => {
    const trimmedTask = task.trim()
    if (!trimmedTask) return
    editTask(id, trimmedTask)
  }, [task])

  return (
    <Card {...dragHandleProps} {...draggableProps} ref={innerRef}>
      <TextArea
        value={task}
        ref={textAreaRef}
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
