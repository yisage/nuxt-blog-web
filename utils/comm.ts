import LoginModal from "@/components/LoginModal.vue"
import { createVNode, createApp } from "vue-demi"


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

export const useCommentInput = function () {
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