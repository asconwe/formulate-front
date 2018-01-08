import React from 'react';
import CreateCustomElementContainer from '../CustomElementContainer'
import { DraftParagraph } from '../../element-library'

export default {
    component: CreateCustomElementContainer(DraftParagraph, 1),

    reduxState: {
        structureContent: [
            { id: 0, value: 'this one should not change' },
            { id: 1, value: 'from redux' }, 
        ]
    }
}