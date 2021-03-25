import { useEffect, useRef } from 'react'

const useTitle = (title) => {
  const refCounter = useRef(0)
  useEffect(() => {
    document.title = title
  }, [title])

  useEffect(() => {
    refCounter.current++;
    console.log(refCounter.current)
  })
}

export default useTitle
