import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PollingView from './components/PollingView';
import ResultView from './components/ResultView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PollingView />
        <ResultView />
      </div>
    );
  }
}

export default App;
