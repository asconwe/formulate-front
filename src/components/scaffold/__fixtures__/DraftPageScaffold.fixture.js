import React from 'react';
import DraftPageScaffold from '../DraftPageScaffold';

export default {
    component: DraftPageScaffold,
    reduxState: {
        structureContent: [null, null, null, {
            id: 3,
            value: 'test'
        }]
    },
    props: {
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
                        // children: [
                        //     {
                        //         id: 4,
                        //         type: "Paragraph",
                        //         options: {
                        //             style: {}
                        //         }
                        //     }
                        // ]
                    }
                ],
            }
        ]
    }
}