<template>
    <div class="control">
        <textarea class="textarea is-small" placeholder="Small textarea" v-model="content"></textarea>
        <div class="input-bottom flex">
            <div class="tool">
                <template v-if="!isLogin"> 你还没有登录，请<span class="login">登录</span>后操作</template>
            </div>
            <div class="submit">
                <button class="button is-link has-addons" @click="submit">发表</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useLogin } from "@/utils/comm"
import { useUserStore } from "@/store/index"
const userStore = useUserStore();
const content = ref('')

const isLogin = computed(() => {
    return userStore.token !== ''
})

const emit = defineEmits(['submit'])
const submit = function () {
    if (isLogin.value) {
        if (!content.value) return Message.info('请输入评论内容');
        emit('submit', content.value)
        content.value = ''
    } else {
        useLogin()
    }
}



</script>

<style >
.control {
    margin-bottom: 1.25rem;
}

.textarea.is-small {
    background: transparent;
    color: #cdcdcd;
    border-color: #02d7f2;
}

.input-bottom {
    height: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #02d7f2;
    border-top: none;
    padding-left: 5px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
}

.submit .button {
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 2px;
}

.tool {
    color: #00b2ff;
}

.login {
    margin: 0 2px;
    text-decoration: underline;
    color: #0093ff;
    font-size: 12px;
    cursor: pointer;
}
</style>