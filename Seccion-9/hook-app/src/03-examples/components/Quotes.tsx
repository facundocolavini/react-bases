import { Quote } from "../../interfaces/brakingBadI"
import { useRef, useLayoutEffect, useState } from 'react';

export const Quotes = ({author, quote, series}: Quote): JSX.Element => {
  const pRef: React.MutableRefObject<HTMLParagraphElement> = useRef()
  const [boxSize , setBoxSize] = useState({width:0, height:0})
 
  useLayoutEffect(() => {
      const { height, width } = pRef.current.getBoundingClientRect()
      setBoxSize({height, width}) 
  }, [quote])

  return (
    <>
      <blockquote 
        className='blockquote text-end'
        style={{display: "flex"}}
        >

          <p className='mb-1' ref={ pRef }>{quote}</p>
          <p className='mb-1'>{series}</p>
          <footer className="blockquote-footer">{author}</footer>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}