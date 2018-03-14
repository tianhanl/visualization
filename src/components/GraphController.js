import React from 'react';
import LineGraphContainer from './LineGraphContainer';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


class GraphController extends React.Component {
    constructor(props) {
        super(props);
        let separationKeys = props.separationKeys?['original', ...props.separationKeys]:['original'];
        separationKeys = separationKeys.map(key => ({
           value: key,
            label: key
        }));
        this.state = {
            activeKeys: [...props.lineKeys],
            separationKeys,
            activeSeparationKey: 'original'
        }
    }

    activeKeysChanged = (newKeys) => {
        this.setState({
            activeKeys: newKeys
        });
    };

    activeSeparationKeyChanged = (selectedOption) => {
        this.setState({
            activeSeparationKey: selectedOption.value
        });
    };

    _unique = (originalArray) => {
      return Array.from(new Set(originalArray));
    };

    _groupBy = (originalArray, key) => {
        if(!key || key==='original') {
            return [{
                name: 'original data',
                data: originalArray
            }];
        }
        return  this._unique(originalArray.map(element => element[key]))
            .map(element => ({
                name:element,
                data:originalArray.filter(ele => ele[key] === element)
            }));
    };

    render() {
        return (
            <div>
                <Select
                    name={'separation-key'}
                    value={this.state.activeSeparationKey}
                    onChange={this.activeSeparationKeyChanged}
                    options = {this.state.separationKeys}
                />
                <CheckboxGroup style={{padding:'1em'}} checkboxDepth={2} name="activeKeys"
                               value={this.state.activeKeys} onChange={this.activeKeysChanged}>
                    {
                        this.props.lineKeys.map(element => (
                            <label key={element}><Checkbox value={element}/> {element}</label>
                        ))
                    }
                </CheckboxGroup>
                <LineGraphContainer dataList={this._groupBy(this.props.data, this.state.activeSeparationKey)}
                                    lineKeys={this.state.activeKeys}/>
            </div>
        )
    }
}

export default GraphController;