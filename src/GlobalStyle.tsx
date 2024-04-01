import { createGlobalStyle } from 'styled-components'
import { ThemeStyles } from './types/theme'

type Props = {
  themeStyles: ThemeStyles
}

const GlobalStyle = createGlobalStyle<Props>`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background: ${({ themeStyles }) => themeStyles.background};
    color: ${({ themeStyles }) => themeStyles.color};;
  }
  
  h1 {
    text-align: center;
  }
`

export default GlobalStyle
