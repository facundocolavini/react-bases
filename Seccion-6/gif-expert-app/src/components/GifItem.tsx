import React from 'react'

type GifItem = {
    id: string;
    title : string;
    url : string;
}

export const GifItem = ({ title, url } : GifItem) => {
  return (
    <div className="card">
      <img src={url} alt={title} loading="lazy"/>
      <p>{title}</p>
    </div>
  )
}