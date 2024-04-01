import styled from 'styled-components'
import { ThemeStyles } from '@/types/theme'

type ContainerProps = {
  $themeStyles: ThemeStyles
}

export const Container = styled.article<ContainerProps>`
  background: ${({ $themeStyles }) => $themeStyles.columnColor};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  padding-bottom: 0.25rem;
  border-radius: 0.25rem;
  overflow-y: scroll;
`

export const BoardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CardContainer = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`
