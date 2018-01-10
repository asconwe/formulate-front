import React from 'react';
import ConnectedDraftPage from '../container-components/ConnectedDraftPage';

export default {
    component: ConnectedDraftPage,
    reduxState: {
        elements: [
            {
                id: 0,
                type: "Box",
                options: {
                    style: {
                        background: "red",
                        margin: "3px"
                    }
                },
            },
            {
                id: 1,
                type: "Box",
                options: {
                    style: {
                        background: "yellow",
                        margin: "3px"
                    }
                },
            },
            {
                id: 2,
                type: "Box",
                options: {
                    style: {
                        background: "blue",
                        margin: "3px"
                    }
                },
            },
            {
                id: 3,
                type: "Header",
                value: 'help',
                options: {
                    style: {}
                }
            },
            {
                id: 4,
                type: "Paragraph",
                value: 'test',
                options: {
                    style: {}
                }
            }
        ],

        title: 'my page',
        structure: [
            {
                id: 0,
                type: 'Box',
                children: [
                    {
                        id: 1,
                        type: 'Box',
                        children: [
                            {
                                id: 3,
                                type: 'Header'
                            }
                        ]
                    },
                    {
                        id: 2,
                        type: 'Box',
                        children: [
                            {
                                id: 4,
                                type: 'Paragraph',
                            }
                        ]
                    }
                ],
            }
        ]
    }
}