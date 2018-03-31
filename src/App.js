import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import GraphCreator from './components/GraphCreator';
// const tabNames = [
//   'Pollings',
//   'Twitter',
//   'Results'
// ];
//
// const tabContents = [
//   PollingView,
//   TwitterView,
//   ResultView
// ];
//<TabbedGraphConntainer tabNames={tabNames} tabContents={tabContents} />

class App extends Component {
  render() {
    return (
      <div style={{
          color: '#515151'
        }} className="App">

        <GraphCreator></GraphCreator>
      </div>
    );
  }
}

export default App;