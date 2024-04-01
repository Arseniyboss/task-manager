import styled from 'styled-components'
import { ThemeStyles } from '@/types/theme'

type CardProps = {
  $themeStyles: ThemeStyles
}

export const Card = styled.li<CardProps>`
  background: ${({ $themeStyles }) => $themeStyles.background};
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.25rem;
  padding: 1rem;
  margin-bottom: 0.75rem;
`

export const TextArea = styled.textarea`
  border: none;
  outline: none;
  color: inherit;
  background: inherit;
  font-size: inherit;
  font-family: inherit;
  resize: none;
  width: 90%;
`
