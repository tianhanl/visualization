import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import TabbedGraphConntainer from './components/TabbedGraphContainer';
import ResultView from './components/ResultView';
import PollingView from './components/PollingView';
import TwitterView from './components/TwitterView';
const tabNames = [
  'Pollings',
  'Twitter',
  'Results'
];

const tabContents = [
  PollingView,
  TwitterView,
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