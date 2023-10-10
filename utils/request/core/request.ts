import { OpenAPIConfig } from "@/utils/request";
import { ApiRequestOptions } from "@/utils/request/core/ApiRequestOptions"
import { useUserStore } from "@/store/index"

/* 不明原因走代理报错
   生成的代码还需要完善
   查询参数不是对象
*/
const getTokenHeaders = function () {
    const headers: { token?: string } = {};
    if (process.server) return {} //服务端渲染没有token数据
    const userStore = useUserStore()
    if (userStore.userInfo?.token) {
        headers.token = userStore.userInfo?.token
    }
    return headers
}

const authorizationExpire = function(){
    const userStore = useUserStore();
    userStore.resetUserInfo()
}

const logError = function (error: any) {
    if (process.server) {
        console.log("\x1b[31m%s\x1b[0m", `[Server ERROR] `,);
        console.log(error)
    } else {
        if (error.value.data) {
            const { data } = error.value;
            const { code, err } = data
            switch(code){
                case 401:
                    Message.error(`${code}-${err}`)
                    authorizationExpire();
                    break;
                case 404:
                    Message.error(`${code}-${err}`)
                    break
                default:
                    Message.error(`${code}-${err}`)
            }
           
        }
    }
}

const isDev = function () {
    return process.env.NODE_ENV === 'Development'
}

const timestamp = () => useRuntimeConfig().public.timestamp;
const BASEURL = `/api`

export const request = async function <T>(OpenAPI: OpenAPIConfig, params: ApiRequestOptions): Promise<T> {

    const url = `${BASEURL}${params.url}?s=${timestamp()}`;
    const headers = { ...getTokenHeaders() };
    console.log(url)
    console.log(headers)
    console.log(params)
    try {

        const { data, error } = await useFetch(url, { headers, method: params.method, query: params.query, body: params.body });
        const result = data.value
        if (error.value || !result) {
            logError(error)
            return Promise.reject(error)
        }
        return result as T
    } catch (error) {
        logError(error)
        return Promise.reject(error)
    }

}