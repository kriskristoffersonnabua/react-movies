import React, { Component } from 'react'

import movieList from '../../movieList'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div className="movie-list">
      {movieList.map(movie => (
        <div className="movie" key={movie.id}>
          <img src={movie.thumbnail} alt={movie.title} />
          <div className="info">
            <h2>
              <Link to={`movie/${movie.id}`}>{movie.title}</Link>
            </h2>
            <p>{movie.description}</p>
            <span className="year">{movie.year}</span>
            <span className="score">{movie.score}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
