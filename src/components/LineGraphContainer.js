import React from 'react';
import LineGraph from './LineGraph';
import PropTypes from 'prop-types';

class LineGraphContainer extends React.Component {
    render() {
        return (
            <div >
                {
                    this.props.dataList.map(element => (
                        <div key={element.name}>
                            <h3>{element.name}</h3>
                            <LineGraph data={element.data} lineKeys={this.props.lineKeys} />
                        </div>
                    ))
                }
            </div>
        )
    }
}

LineGraphContainer.propTypes = {
    dataList: PropTypes.array,
    lineKeys: PropTypes.array
}

export default LineGraphContainer;