import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeContextProvider } from './contexts/ThemeContext'
import { TaskContextProvider } from './contexts/TaskContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeContextProvider>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </ThemeContextProvider>
)
