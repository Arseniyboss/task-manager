import { RefObject, useEffect, useCallback } from 'react'

type Ref = RefObject<HTMLTextAreaElement>

export const useAutoResizeTextarea = (ref: Ref, value: string) => {
  const handleResize = useCallback(() => {
    const textarea = ref.current
    if (textarea) {
      textarea.style.height = 'auto' // adjusts height when deleting multiple lines of text
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }, [ref])
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize, ref, value])
}
