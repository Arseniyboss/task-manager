import { RefObject, useEffect } from 'react'

type Ref = RefObject<HTMLTextAreaElement>

export const useAutosizeTextArea = (ref: Ref, value: string) => {
  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = 'auto' // adjusts height when deleting multiple lines of text
      ref.current.style.height = `${ref.current.scrollHeight}px`
    }
  }, [ref, value])
}
