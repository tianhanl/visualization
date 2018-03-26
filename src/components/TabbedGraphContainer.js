import React from 'react';
import PropTypes from 'prop-types';
import ResultView from './ResultView';
import PollingView from './PollingView';
import 'react-tabs/style/react-tabs.css';

import {
  Tab,
  Tabs,
  TabList,
  TabPanel
} from 'react-tabs';



class TabbedGraphContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tabs style={{
        maxWidth: '90%',
        margin: 'auto'
      }}>
        <TabList>
          <Tab>Pollings</Tab>
          <Tab>Results</Tab>
        </TabList>
        <TabPanel>
          <PollingView></PollingView>
        </TabPanel>
        <TabPanel>
          <ResultView></ResultView>
        </TabPanel>
      </Tabs>
    )
  }
}

export default TabbedGraphContainer;
