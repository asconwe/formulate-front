import React from 'react';
import PropTypes from 'prop-types';
import composeNestedStructure from './compose-nested-structure';
import Controls from './controls/Controls';

class PageBuilder extends React.Component {
  constructor(props) {
    super(props);
    
    this.composeNestedStructure = composeNestedStructure.bind(this);
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.composeNestedStructure(this.props.structure, [], Controls)}
      </div>
    )
  }
}

PageBuilder.propTypes = {
  structure: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}

export default PageBuilder