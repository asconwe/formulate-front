import React from 'react';
import PropTypes from 'prop-types';

import ElementLibrary from './element-library';

function composeNestedStructure(elements, parentLocation = [], Wrap) {
    return elements.map(({ children, options, type }, index) => {
        const Element = ElementLibrary[type] || ElementLibrary['Box'];
        const location = parentLocation.concat([index]);

        if (Wrap) {
            const structurePropTypes = {
                Wrap: PropTypes.func
            }
            const propsToCheck = {
                Wrap
            }
            PropTypes.checkPropTypes(structurePropTypes, propsToCheck, 'props', 'compose-nested-structure');

            return (
                <Wrap key={index}>
                    <Element style={options.style} location={location}>
                    {location}
                    {children && this.composeNestedStructure(children, location, Wrap)}
                    </Element>  
                </Wrap>
            )
        } else {
            return (
                <Element style={options.style} location={location} key={index}>
                {location}
                {children && this.composeNestedStructure(children, location)}
                </Element>
            )
        }
    })
}



export default composeNestedStructure;