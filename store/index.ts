import { defineStore, skipHydrate } from 'pinia'
import { LoginService } from "@/utils/request/login"
import { UnRetutnPromiseType } from "@/utils/toolType"


type UserInfo = UnRetutnPromiseType<typeof LoginService.userLogin>['data']

export const useUserStore = defineStore('user', () => {

    const userInfo = useLocalStorage<UserInfo>('user-info', Object.create(null))
    const setUserInfo = (data: UserInfo) => {
        userInfo.value = data
    }

    const token = computed(() => userInfo.value?.token || '');

    const resetUserInfo = () => userInfo.value = null;


    return {
        userInfo: skipHydrate(userInfo),
        token,
        setUserInfo,
        resetUserInfo
    }
});
