import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TabbedGraphConntainer from './components/TabbedGraphContainer';
import ResultView from './components/ResultView';
import PollingView from './components/PollingView';
const tabNames = [
  'Pollings',
  'Results'
];

const tabContents = [
  PollingView,
  ResultView
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <TabbedGraphConntainer tabNames={tabNames} tabContents={tabContents} />
      </div>
    );
  }
}

export default App;
