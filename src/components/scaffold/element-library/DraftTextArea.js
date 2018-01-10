import React from 'react';
import PropTypes from 'prop-types';

const inheritStyles = {
    fontSize: 'inherit',
    fontWeight: 'inherit',
    fontFamily: 'inherit',
    width: '100%',
    background: 'inherit',
    border: 'solid 1px #ddd',
    margin: 0,
    padding: 0,
    resize: 'none'
}

export default class DraftTextArea extends React.Component {
    static propTypes = {
        setValue: PropTypes.func.isRequired,
        value: PropTypes.string.isRequired
    }

    render() {
        return (
            <textarea style={inheritStyles} onChange={(e) => this.props.setValue(e.target.value, this.props.id)} value={this.props.value || ""} />
        )
    }
}