import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import signUp from './components/Auth';
import AnimeSearch from './components/pages/SearchAnime';




function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/sign-up' component={signUp} />
          <Route path='/anime-search' component={AnimeSearch} />

        </Switch>
      </Router>

    </>
  );
}

export default App;
