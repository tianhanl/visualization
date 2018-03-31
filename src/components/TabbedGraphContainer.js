import React from 'react';
import PropTypes from 'prop-types';
import './TabbedGraphContainer.css';

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
      tabContents: this.props.tabContentRenders
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
      this.props.tabContentRenders.map((contentRender, index) => {
            return (<TabPanel key={this.state.tabNames[index]}>
              {
                  contentRender()
              }
            </TabPanel>)
          })
        }
      </Tabs>
    )
  }
}

export default TabbedGraphContainer;