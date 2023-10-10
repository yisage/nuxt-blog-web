<template>
    <aModal title="登录" :visible="true" @cancel="close" @ok="ok" >
        <aForm autoComplete='off' :model="form" :rules="rules">
            <aFormItem label="账号" field="form.username">
                <aInput v-model="form.account" autocomplete="new-password" placeholder="请输入账号"></aInput>
            </aFormItem>
            <aFormItem label="密码" field="form.password">
                <aInputPassword v-model="form.password" autocomplete="new-password" placeholder="请输入密码"></aInputPassword>
            </aFormItem>
        </aForm>
    </aModal>
</template>

<script lang="ts" setup>
import { LoginService } from "@/utils/request/login"
import { useUserStore } from "@/store/index"

const emit = defineEmits(['close'])
const userStore = useUserStore();

const close = function () {
    emit('close')
}

const ok = async function () {
    const requestBody = {
        account: form.account,
        password: form.password
    }
    const userInfo = await LoginService.userLogin({
        requestBody
    });
    Message.success('登录成功!');
    userStore.setUserInfo(userInfo.data)
    close()
}

const form = reactive({ account: '', password: '' });
const rules = reactive({
    account:[],
    password:[]
})
</script>