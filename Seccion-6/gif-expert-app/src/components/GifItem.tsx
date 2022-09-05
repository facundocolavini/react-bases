import React from 'react'
import PropTypes from 'prop-types'

type Gif = {
    id?: string;
    title? : string;
    url? : string;
}

export const GifItem = ({ title, url } : Gif) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

GifItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}