import { Dispatch, SetStateAction } from 'react'
import { DropResult } from 'react-beautiful-dnd'

export type Status = 'To Do' | 'In Progress' | 'Done'

export type Task = {
  id: string
  title: string
  status: Status
}

export type CurrentStatus = Status | ''

export type TaskContextType = {
  statuses: Status[]
  currentStatus: CurrentStatus
  tasks: Task[]
  isAdding: boolean
  setIsAdding: Dispatch<SetStateAction<boolean>>
  handleAdd: (status: Status) => void
  handleDrag: (result: DropResult) => void
  addTask: (title: string, status: Status) => void
  deleteTask: (id: string) => void
  editTask: (id: string, title: string) => void
  filterTasks: (status: Status) => Task[]
}
