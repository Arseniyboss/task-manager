import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TaskContextProvider } from './TaskContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TaskContextProvider>
    <App />
  </TaskContextProvider>
)
