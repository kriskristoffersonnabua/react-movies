import React, { Component, useState } from 'react'

import movieInfo from '../../movieInfo'
import Cast from './Cast'

const Reviews = React.lazy(() => import('./Reviews'))

const Movie = (props) => {
  const [activeTab, setActiveTab] = useState('cast')

  const { id } = props.match.params
  const movie = movieInfo[id]

  if (!movie) {
    return <h1>Movie not found!</h1>
  }

  return (
    <div className="movie-page">
      <div className="movie">
        <img src={movie.thumbnail} />
        <div className="info">
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <span className="year">{movie.year}</span>
          <span className="score">{movie.score}</span>
        </div>
      </div>
      <div className="tabs">
        <button
          className={activeTab === 'cast' ? 'active' : null}
          onClick={() => setActiveTab('cast')}
        >
          Cast
        </button>
        <button
          className={activeTab === 'reviews' ? 'active' : null}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
        </button>
      </div>
      <React.Suspense fallback={<div>Loadingzz...</div>}>
        <div>
          {activeTab === 'cast' && <Cast />}
          {activeTab === 'reviews' && <Reviews />}
        </div>
      </React.Suspense>
    </div>
  )
}

export default Movie
