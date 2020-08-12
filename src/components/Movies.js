import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './Movies.css'
import Header from './reusables/Header'

const Home = React.lazy(() => import('./reusables/Home'))
const Movie = React.lazy(() => import('./reusables/Movie'))
const About = React.lazy(() => import('./reusables/About'))

const Movies = () => {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movie/:id" component={Movie} />
            <Route path="/about" component={About} />
          </Switch>
        </React.Suspense>
      </React.Fragment>
    </Router>
  );
}

export default Movies
