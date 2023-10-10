/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Replie = {
    properties: {
        replieId: {
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
        senderId: {
    type: 'number',
    isRequired: true,
},
        recipientId: {
    type: 'number',
    isRequired: true,
},
        recipientName: {
    type: 'string',
    isRequired: true,
},
        senderName: {
    type: 'string',
    isRequired: true,
},
    },
} as const;
