import { ReactNode, createContext } from 'react'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { ThemeContextType, Theme } from '@/types/theme'
import { themes } from '@/themes'

type Props = {
  children: ReactNode
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

export const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'light')

  const themeStyles = themes[theme]

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const value = {
    theme,
    themeStyles,
    toggleTheme,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
