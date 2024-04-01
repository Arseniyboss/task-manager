import { FaMoon } from 'react-icons/fa'
import { ImSun } from 'react-icons/im'
import { useTheme } from '@/hooks/useTheme'
import { IconContainer } from './styles'

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <IconContainer
      onClick={toggleTheme}
      aria-label={`switch theme to ${theme === 'light' ? 'dark' : 'light'}`}
    >
      {theme === 'light' ? <FaMoon /> : <ImSun />}
    </IconContainer>
  )
}

export default ThemeSwitcher
