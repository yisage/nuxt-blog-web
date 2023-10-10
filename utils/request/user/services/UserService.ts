/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserItem } from '../models/UserItem';

import type { CancelablePromise } from '../../core/CancelablePromise';
import { OpenAPI } from '../../core/OpenAPI';
import { request as __request } from '../../core/request';

export class UserService {

    /**
     * Role
     * 获取用户列表
     * @returns any OK
     * @throws ApiError
     */
    public static getUserList({
currentPage,
pageSize,
roleIds,
name,
}: {
currentPage: number,
pageSize: number,
roleIds: any[],
name?: string,
}): Promise<{
code: number;
userList: Array<UserItem>;
total: number;
}> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/get-user-list',
            query: {
                'currentPage': currentPage,
                'pageSize': pageSize,
                'name': name,
                'roleIds': roleIds,
            },
        });
    }

}
