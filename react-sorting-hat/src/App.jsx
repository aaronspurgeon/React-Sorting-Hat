import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Welcome from './Components/Welcome';
import './App.css';
import Questions from './Components/Questions';

const App = () => {
    return (
      <div className="App">
        <Route exact path='/' component={Welcome}/>
        <Route path='/questions' component={Questions} />
      </div>
    );
}

export default App;
