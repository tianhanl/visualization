import React, { Component } from 'react';
import SyntaxHighliter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';
import './App.css';
import GraphCreator from './components/GraphCreator';
import { graphSceneString } from './utils/finalData';

class App extends Component {
  render() {
    return (
      <div
        style={{
          color: '#515151'
        }}
        className="App"
      >
        <section>
          <p>This graph is created using following JSON</p>
          <div className={'codebox'}>
            <SyntaxHighliter wrapLines={true} language="json" style={docco}>
              {graphSceneString}
            </SyntaxHighliter>
          </div>
        </section>
        <GraphCreator scenes={graphSceneString} />
      </div>
    );
  }
}

export default App;
