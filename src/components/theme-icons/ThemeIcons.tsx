import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '@/hooks/useTheme'
import { IconContainer } from './styles'

const ThemeIcons = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <IconContainer onClick={toggleTheme}>
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </IconContainer>
  )
}

export default ThemeIcons
