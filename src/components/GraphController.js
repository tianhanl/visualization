import React from 'react';
import LineGraphContainer from './LineGraphContainer';

class GraphController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeList: [...props.lineKeys],
            dataList: [{data:props.data, name:'Original Data'}]
        }
    }

    render() {
        return (
            <div>
                <LineGraphContainer dataList={this.state.dataList} lineKeys={this.state.activeList}/>
            </div>
        )
    }
}

export default GraphController;