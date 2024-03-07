import { DraggableProvided } from 'react-beautiful-dnd'
import { useState, useRef } from 'react'
import { useTaskContext } from '@/hooks/useTaskContext'
import { useAutosizeTextArea } from '@/hooks/useAutosizeTextArea'
import { useUpdateEffect } from '@/hooks/useUpdateEffect'
import { Card, TextArea, Button, Trashcan } from '@/styles'
import { Task as TaskProps } from '@/types'

type Props = TaskProps & DraggableProvided

const Task = ({
  id,
  title,
  draggableProps,
  dragHandleProps,
  innerRef,
}: Props) => {
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
        <Trashcan />
      </Button>
    </Card>
  )
}

export default Task
