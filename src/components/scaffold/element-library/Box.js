import React from 'react';
import PropTypes from 'prop-types';

const Box = (props) => {
    return (
        <div style={props.style}>{props.children}</div>
    )
}

Box.propTypes = {
    style: PropTypes.object
}

export default Box