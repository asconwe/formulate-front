import React from 'react';
import CreateCustomElementContainer from '../../CustomElementContainer'
import Box from '../../Box'
import { DraftHeader } from '../../../element-library'

const DraftHeaderContainer = CreateCustomElementContainer(DraftHeader, 0)


export default {
    component: Box,
    children: (
        <div>
            <DraftHeaderContainer />
        </div>
    ),

    reduxState: {
        structureContent: [
            { id: 0, value: 'from redux' }, 
            { id: 1, value: 'this one should not change' }
        ]
    }
}