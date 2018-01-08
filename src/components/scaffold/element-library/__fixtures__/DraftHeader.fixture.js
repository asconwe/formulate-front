import React from 'react';
import CreateCustomElementContainer from '../CustomElementContainer'
import { DraftHeader } from '../../element-library'

export default {
    component: CreateCustomElementContainer(DraftHeader, 0),

    reduxState: {
        structureContent: [
            { id: 0, value: 'from redux' }, 
            { id: 1, value: 'this one should not change' }
        ]
    }
}