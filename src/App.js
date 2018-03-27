import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TabbedGraphConntainer from './components/TabbedGraphContainer';
import ResultView from './ResultView';
import PollingView from './PollingView';
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
        <TabbedGraphConntainer />
      </div>
    );
  }
}

export default App;
