/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../../core/CancelablePromise';
import { OpenAPI } from '../../core/OpenAPI';
import { request as __request } from '../../core/request';

export class LoginService {

    /**
     * 前台用户登录
     * @returns any OK
     * @throws ApiError
     */
    public static userLogin({
requestBody,
}: {
requestBody?: {
account: string;
password: string;
},
}): Promise<{
code: string;
data: {
userId: number;
userName: string;
age: number;
account: string;
email: string;
frozen: boolean;
createdAt?: string;
updatedAt: string;
avatar: string;
roles: Array<{
roleId: number;
roleName: string;
}>;
token: string;
};
}> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/login/user-login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
