import LoginModal from "@/components/LoginModal.vue"
import CommentInput from "@/components/blog/comment-input.vue"
import { createVNode, createApp, App } from "vue-demi"


export const useLogin = function () {
    const container = document.createElement('div')
    const close = function () {
        app.unmount();
        container.remove()
    }
    const vNode = createVNode(LoginModal, { onClose: close });
    const app = createApp(vNode)
    app.mount(container);
    document.body.style.width = "auto"
    document.body.appendChild(container)
}

interface InputCallBack {
    (content: string): void;
}

const apps: App[] = []
export const useCommentInput = function (el: HTMLElement, inputCallBack: InputCallBack) {

    const container = document.createElement('div')
    container.style.marginTop = '0.75rem'
    const vNode = createVNode(CommentInput, {
        onSubmit(content: string) {
            inputCallBack(content)
        }
    });

    const app = createApp(vNode)
    app.mount(container);
    //重写app卸载方法
    const unmount = app.unmount
    app.unmount = function () {
        unmount()
        container.remove()
    }
    apps.push(app)
    el.appendChild(container)

}

export const useClearInput = function () {
    for (let app of apps) {
        app.unmount()
    }
}