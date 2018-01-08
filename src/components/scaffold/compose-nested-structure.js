import React from 'react';
import PropTypes from 'prop-types';

import ElementLibrary from './element-library';

function composeNestedStructure(elements, parentLocation = [], Wrap, mode = 'live') {
    return elements.map(({ children, options, type, id }, index) => {
        console.log(id, mode)
        const Element = ElementLibrary(mode, type, id);
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
                    {children && this.composeNestedStructure(children, location, Wrap, mode)}
                    </Element>  
                </Wrap>
            )
        } else {
            return (
                <Element style={options.style} location={location} key={index}>
                {location}
                {children && this.composeNestedStructure(children, location, null, mode)}
                </Element>
            )
        }
    })
}



export default composeNestedStructure;