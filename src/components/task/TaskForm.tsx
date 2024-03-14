import { KeyboardEvent, useState, useRef, useEffect } from 'react'
import { useTaskContext } from '@/hooks/useTaskContext'
import { useAutoResizeTextarea } from '@/hooks/useAutosizeTextArea'
import { Status } from '@/types'
import { Card, TextArea } from './styles'

type Props = {
  status: Status
}

const TaskForm = ({ status }: Props) => {
  const [task, setTask] = useState<string>('')

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const { isAdding, setIsAdding, addTask } = useTaskContext()

  useAutoResizeTextarea(textareaRef, task)

  useEffect(() => {
    if (isAdding) {
      textareaRef.current?.focus()
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
        ref={textareaRef}
        rows={1}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleEnter}
      />
    </Card>
  )
}

export default TaskForm
