import { useContext } from 'react'
import { TaskContext } from '@/contexts/TaskContext'

export const useTaskContext = () => {
  const taskContext = useContext(TaskContext)

  if (!taskContext) {
    throw new Error('useTaskContext must be used within TaskContextProvider')
  }

  return taskContext
}
