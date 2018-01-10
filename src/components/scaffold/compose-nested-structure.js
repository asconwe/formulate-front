import React from 'react';
import PropTypes from 'prop-types';

import ElementLibrary from './element-library';

function composeNestedStructure(children, parentLocation = [], Wrap, mode = 'live') {
    
    return children.map(({ id, type, children }, index) => {
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
                    <Element location={location}>
                    {children && this.composeNestedStructure(children, location, Wrap, mode)}
                    </Element>  
                </Wrap>
            )
        } else {
            return (
                <Element location={location} key={index}>
                {location}
                {children && this.composeNestedStructure(children, location, null, mode)}
                </Element>
            )
        }
    })
}



export default composeNestedStructure;