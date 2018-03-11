import React from 'react';
import LineGraphContainer from './LineGraphContainer';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';


class GraphController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeKeys: [...props.lineKeys],
            dataList: [{data:props.data, name:'Original Data'}]
        }
    }

    activeKeysChanged = (newKeys) => {
        this.setState({
            activeKeys: newKeys
        });
    };

    render() {
        return (
            <div>
                <CheckboxGroup style={{padding:'1em'}} checkboxDepth={2} name="activeKeys"
                               value={this.state.activeKeys} onChange={this.activeKeysChanged}>
                    {
                        this.props.lineKeys.map(element => (
                            <label key={element}><Checkbox value={element}/> {element}</label>
                        ))
                    }
                </CheckboxGroup>

                <LineGraphContainer dataList={this.state.dataList} lineKeys={this.state.activeKeys}/>
            </div>
        )
    }
}

export default GraphController;