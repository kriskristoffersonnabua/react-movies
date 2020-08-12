import React, { Component } from 'react'
import movieCast from '../../movieCast'

export default () => {
  return (
    <div className="cast-container">
      <h3>Cast</h3>
      <div className="cast-list">
        {movieCast.map(cast => (
          <div className="cast" key={cast.name}>
            <img alt={cast.name} src={cast.thumbnail} />
            <h6>{cast.name}</h6>
          </div>
        ))}
      </div>
    </div>
  )
}
