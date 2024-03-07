import { KeyboardEvent, useState, useRef, useEffect } from 'react'
import { useTaskContext } from '@/hooks/useTaskContext'
import { useAutosizeTextArea } from '@/hooks/useAutosizeTextArea'
import { Status } from '@/types'
import { Card, TextArea } from '@/styles'

type Props = {
  status: Status
}

const TaskForm = ({ status }: Props) => {
  const [task, setTask] = useState<string>('')

  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const { isAdding, setIsAdding, addTask } = useTaskContext()

  useAutosizeTextArea(textAreaRef, task)

  useEffect(() => {
    if (isAdding) {
      textAreaRef.current?.focus()
    }
  }, [isAdding])

  const handleEnter = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (!task) return
      addTask(task.trim(), status)
      setIsAdding(false)
    }
  }
  return (
    <Card>
      <TextArea
        value={task}
        ref={textAreaRef}
        rows={1}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleEnter}
      />
    </Card>
  )
}

export default TaskForm
