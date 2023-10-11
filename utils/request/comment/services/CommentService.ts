/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Comment } from '../models/Comment';
import type { Replie } from '../models/Replie';

import type { CancelablePromise } from '../../core/CancelablePromise';
import { OpenAPI } from '../../core/OpenAPI';
import { request as __request } from '../../core/request';

export class CommentService {

    /**
     * Comment
     * 获取评论列表
     * @returns any OK
     * @throws ApiError
     */
    public static getCommentList({
articleId,
}: {
articleId: number,
}): Promise<{
code: number;
data: Array<Comment>;
}> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/comment/get-comment',
            query: {
                'articleId': articleId,
            },
        });
    }

    /**
     * Comment
     * 新增评论
     * @returns any OK
     * @throws ApiError
     */
    public static addComment({
requestBody,
}: {
requestBody?: {
articleId?: number;
content?: string;
},
}): Promise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/comment/add-comment',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 新增回复
     * @returns any OK
     * @throws ApiError
     */
    public static addReply({
requestBody,
}: {
requestBody?: {
/**
 * 回复内容
 */
content: string;
/**
 * 在哪个评论回复
 */
commentId: number;
/**
 * 回复人的ID
 */
recipientId?: number;
},
}): Promise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/comment/add-reply',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Your GET endpoint
     * 查询一个评论的回复
     * @returns any OK
     * @throws ApiError
     */
    public static getCommentReply({
commentId,
}: {
commentId: number,
}): Promise<{
code: number;
data: Array<Replie>;
}> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/comment/get-comment-reply',
            query: {
                'commentId': commentId,
            },
        });
    }

}
