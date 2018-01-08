import React from 'react';
import ConnectedDraftPage from '../ConnectedDraftPage';

export default {
    component: ConnectedDraftPage,
    reduxState: {
        structureContent: [null, null, null,
            {
                id: 3,
                value: 'test'
            },
            {
                id: 3,
                value: 'test'
            }
        ],
        title: 'my page',
        structure: [
            {
                id: 0,
                type: "Box",
                options: {
                    style: {
                        background: "red",
                        margin: "3px"
                    }
                },
                children: [
                    {
                        id: 1,
                        type: "Box",
                        options: {
                            style: {
                                background: "yellow",
                                margin: "3px"
                            }
                        },
                        children: [
                            {
                                id: 3,
                                type: "Header",
                                options: {
                                    style: {}
                                }
                            }
                        ]
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
                        children: [
                            {
                                id: 4,
                                type: "Paragraph",
                                options: {
                                    style: {}
                                }
                            }
                        ]
                    }
                ],
            }
        ]
    }
}