import React, { Component } from 'react';
import SyntaxHighliter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';
import './App.css';
import GraphCreator from './components/GraphCreator';
import { sampleDataString } from './utils/SampleDataGenerator';

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
          <div
            style={{
              margin: 'auto',
              maxHeight: '300px',
              overflow: 'auto',
              width: '90%'
            }}
          >
            <SyntaxHighliter wrapLines={true} language="json" style={docco}>
              {sampleDataString}
            </SyntaxHighliter>
          </div>
        </section>
        <GraphCreator scenes={sampleDataString} />
      </div>
    );
  }
}

export default App;
