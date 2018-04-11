import React from 'react';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import PropTypes from 'prop-types';

class GraphController extends React.Component {
  constructor(props) {
    super(props);
    let separationKeys = props.separationKeys
      ? ['original', ...props.separationKeys]
      : ['original'];
    separationKeys = separationKeys.map(key => ({
      value: key,
      label: key
    }));
    let selectableKeySet = new Set(this.props.selectableKeys);
    let stableKeys = this.props.valueKeys.filter(
      key => !selectableKeySet.has(key)
    );
    this.state = {
      activeSelectableKeys: [...props.selectableKeys],
      separationKeys,
      stableKeys,
      activeSeparationKey: 'original'
    };
  }

  handleActiveSelectableKeysChanged = newKeys => {
    this.setState({
      activeSelectableKeys: newKeys
    });
  };

  activeSeparationKeyChanged = selectedOption => {
    this.setState({
      activeSeparationKey: selectedOption.value
    });
  };

  // computed
  get activeKeys() {
    return this.state.stableKeys.concat(this.state.activeSelectableKeys);
  }

  _unique = originalArray => {
    return Array.from(new Set(originalArray));
  };

  _groupBy = (originalArray, key) => {
    if (!key || key === 'original') {
      return [
        {
          name: 'original data',
          data: originalArray
        }
      ];
    }
    return this._unique(originalArray.map(element => element[key])).map(
      element => ({
        name: element,
        data: originalArray.filter(ele => ele[key] === element)
      })
    );
  };

  render() {
    return (
      <div style={{ padding: '0.5em' }}>
        <div
          style={{
            textAlign: 'left',
            width: '80%',
            maxWidth: '960px',
            margin: 'auto'
          }}
          className={'section'}
        >
          <h3 className={'section-heading'}>Separated by:</h3>
          <Select
            name={'separation-key'}
            value={this.state.activeSeparationKey}
            onChange={this.activeSeparationKeyChanged}
            options={this.state.separationKeys}
          />
          <CheckboxGroup
            style={{ margin: 0, padding: '1em 0' }}
            checkboxDepth={2}
            name="activeSelectableKeys"
            value={this.state.activeSelectableKeys}
            onChange={this.handleActiveSelectableKeysChanged}
          >
            {this.props.selectableKeys.map(element => (
              <label style={{ display: 'inline-block' }} key={element}>
                <Checkbox style={{ verticalAlign: 'middle' }} value={element} />
                <span style={{ verticalAlign: 'middle' }}>{element}</span>
              </label>
            ))}
          </CheckboxGroup>
        </div>
        {this.props.render(
          this._groupBy(this.props.data, this.state.activeSeparationKey),
          this.activeKeys
        )}
      </div>
    );
  }
}

GraphController.propTypes = {
  separationKeys: PropTypes.array,
  data: PropTypes.array,
  selectableKeys: PropTypes.array,
  valueKeys: PropTypes.array,
  render: PropTypes.func
};

export default GraphController;
