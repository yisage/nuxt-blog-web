/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Replie } from './Replie';

export type Comment = {
    commentId: number;
    content: string;
    createdAt: string;
    articleId: number;
    userId: number;
    name: string;
    replies: Array<Replie>;
};
