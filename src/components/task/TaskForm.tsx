import { KeyboardEvent, useState, useRef, useEffect } from 'react'
import { useTheme } from '@/hooks/useTheme'
import { useTaskContext } from '@/hooks/useTaskContext'
import { useAutoResizeTextArea } from '@/hooks/useAutosizeTextArea'
import { Status } from '@/types/task'
import { Card, TextArea } from './styles'

type Props = {
  status: Status
}

const TaskForm = ({ status }: Props) => {
  const [task, setTask] = useState<string>('')

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const { themeStyles } = useTheme()
  const { isAdding, setIsAdding, addTask } = useTaskContext()

  useAutoResizeTextArea(textareaRef, task)

  useEffect(() => {
    if (isAdding) {
      textareaRef.current?.focus()
    }
  }, [isAdding])

  const handleEnter = (e: KeyboardEvent) => {
    if (e.key !== 'Enter') return
    e.preventDefault()
    if (!task) return
    addTask(task.trim(), status)
    setIsAdding(false)
  }
  return (
    <Card $themeStyles={themeStyles}>
      <TextArea
        value={task}
        ref={textareaRef}
        rows={1}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleEnter}
        data-testid="add-task-input"
      />
    </Card>
  )
}

export default TaskForm
