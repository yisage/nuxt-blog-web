/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../../core/CancelablePromise';
import { OpenAPI } from '../../core/OpenAPI';
import { request as __request } from '../../core/request';

export class ArticleService {

    /**
     * Articel
     * 获取文章列表
     * @returns any OK
     * @throws ApiError
     */
    public static getArticleList({
typeId,
currentPage,
pageSize,
}: {
/**
 * 文章分类id
 */
typeId: number,
/**
 * 当前页码
 */
currentPage?: string,
/**
 * 每页数量
 */
pageSize?: string,
}): Promise<{
code: number;
articleList: Array<{
articleId: number;
abstract: string;
fabulous: number;
/**
 * 查看次数
 */
viewNum: number;
/**
 * 文章标题
 */
title: string;
/**
 * 创建时间
 */
createdAt: string;
/**
 * 最新修改shi'jian
 */
updatedAt: string;
/**
 * 作者名称
 */
authName: string;
/**
 * 文章分类名称
 */
typeName: string;
/**
 * 文章分类ID
 */
typeId: number;
/**
 * 文章标签列表
 */
articleTags: Array<{
id?: number;
name?: string;
}>;
/**
 * 点赞总数
 */
approveCount: number;
/**
 * 是否点赞
 */
isApprove: number;
/**
 * 文章目录图片
 */
coverUrl: string;
}>;
/**
 * 文章总数
 */
total: number;
}> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/article/get-article-list',
            query: {
                'typeId': typeId,
                'currentPage': currentPage,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Articel
     * 添加文章
     * @returns any OK
     * @throws ApiError
     */
    public static addArticle({
requestBody,
}: {
requestBody?: {
title: string;
content: string;
typeId: string;
tags: Array<number>;
authId?: number;
abstract: string;
},
}): Promise<{
code: number;
msg?: string;
}> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/article/add-article',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Articel
     * 获取标签列表
     * @returns any OK
     * @throws ApiError
     */
    public static getTagList(): Promise<{
code: number;
/**
 * 标签列表
 */
tagList: Array<{
/**
 * 标签名称
 */
name: string;
/**
 * 标签ID
 */
id: number;
}>;
}> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/article/get-tag-list',
        });
    }

    /**
     * Articel
     * 获取文章详情
     * @returns any OK
     * @throws ApiError
     */
    public static getArticleDetails({
id,
}: {
/**
 * 文章ID
 */
id: string,
}): Promise<{
code: number;
data: {
id: number;
title: string;
fabulous: number;
viewNum: number;
abstract: string;
content: string;
authId: number;
createdAt: string;
updatedAt: string;
coverUrl: string;
time: string;
authName: string;
authAvatar: string;
typeId: number;
articleTags: Array<{
id: number;
name: string;
}>;
};
}> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/article/get-article-details',
            query: {
                'id': id,
            },
        });
    }

}
