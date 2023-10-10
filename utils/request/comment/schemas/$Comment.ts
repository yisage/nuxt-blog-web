/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Comment = {
    properties: {
        commentId: {
    type: 'number',
    isRequired: true,
},
        content: {
    type: 'string',
    isRequired: true,
},
        createdAt: {
    type: 'string',
    isRequired: true,
},
        articleId: {
    type: 'number',
    isRequired: true,
},
        userId: {
    type: 'number',
    isRequired: true,
},
        name: {
    type: 'string',
    isRequired: true,
},
        replies: {
    type: 'array',
    contains: {
        type: 'Replie',
    },
    isRequired: true,
},
    },
} as const;
