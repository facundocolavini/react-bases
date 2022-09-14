import { Quote } from "../../interfaces/brakingBadI"
import React, { useRef, useLayoutEffect, useState } from 'react';

interface Props {
    quote_id: number;
    quote:    string;
    author:   string;
    series:   string;
}

export const Quotes = ({ author, quote, quote_id, series }:Props): JSX.Element => {
  useRef<HTMLInputElement>(null);
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