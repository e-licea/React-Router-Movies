import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { useRouteMatch, useParams, useHistory } from "react-router";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Movie from './Movies/Movie';
import MoviesList from './Movies/MovieList';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    [<Router path="/MoviesList">
      <div>
        <SavedList list={savedList} />
        <div>Replace this Div with your Routes</div>
      </div>
    </Router>,
    <Router path="/Movie/`${id}`">
      <p>Movie</p>
    </Router>]
  );
};

export default App;
