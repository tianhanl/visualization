import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TabbedGraphConntainer from './components/TabbedGraphContainer';

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
