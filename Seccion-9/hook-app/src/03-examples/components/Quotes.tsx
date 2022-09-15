
import React, { useRef, useLayoutEffect, useState } from 'react';
import { Quote } from '../../interfaces/brakingBadI';



export const Quotes = ({ author, quote, quote_id, series }:Quote): JSX.Element => {
  useRef<HTMLInputElement>(null);
  console.table([author, quote, quote_id, series])
  const pRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [boxSize , setBoxSize] = useState({width:0, height:0})
 
  useLayoutEffect(() => { 
      const { height, width } = pRef.current.getBoundingClientRect()
      setBoxSize({height, width}) 
  }, [quote])

  return (
    <>
      <blockquote 
        key={quote_id}
        className='blockquote text-end'
        style={{display: "flex"}}
      >
          <p className='mb-1' ref={ pRef }>{quote}</p>
          <p className='mb-1'  >{series}</p>
          <footer className="blockquote-footer">{author}</footer>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}