import React from 'react';
import PropTypes from 'prop-types';
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
    this.state = {
      tabNames: this.props.tabNames,
      tabContents: this.props.tabContents
    }
  }

  render() {
    return (
      <Tabs style={{
        maxWidth: '90%',
        margin: 'auto'
      }}>
        <TabList>
          {
            this.state.tabNames.map(name => (
              <Tab key={name}>
                {name}
              </Tab>
            ))
          }
        </TabList>
        {
          this.state.tabContents.map((content, index) => {
            const DynamicTag = content;
            return (<TabPanel key={index}>
              <DynamicTag></DynamicTag>
            </TabPanel>)
          })
        }
      </Tabs>
    )
  }
}

export default TabbedGraphContainer;