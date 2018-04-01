import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GraphCreator from './components/GraphCreator';
class App extends Component {
  render() {
    return (
      <div
        style={{
          color: '#515151'
        }}
        className="App">
        <GraphCreator />
      </div>
    );
  }
}

export default App;
