<template>
    <article class="media">
        <figure class="media-left">
            <p class="image is-64x64"> <img src="https://bulma.zcopy.site/images/placeholders/128x128.png"> </p>
        </figure>
        <div class="media-content">
            <p class="comment-user-name name-color">{{ data.name }} <span class="time">{{ data.createdAt }}</span></p>
            <div class="content" ref="commentContainer">
                {{ data.content }}
                <p class="comment-footer" ref="commentRef">
                    <span class="reply-btn" @click="commentReplieBtnClick(-1)">回复</span>
                </p>
            </div>
            <article class="media" v-for="(replie, index) in data.replies">
                <figure class="media-left">
                    <p class="image is-48x48"> <img src="https://bulma.zcopy.site/images/placeholders/96x96.png">
                    </p>
                </figure>
                <div class="media-content">
                    <p class="replie-title">
                        <span class="name-color">{{ replie.senderName }}</span>
                        <span class="replie-text" v-if="replie.recipientName">回复</span>
                        <span class="name-color" v-if="replie.recipientName">{{ replie.recipientName }}</span>
                        <span class="name-color">：</span>
                    </p>
                    <div class="content">
                        {{ replie.content }}
                        <p class="replie-footer" ref="replieRef">
                            <span class="reply-btn" @click="commentReplieBtnClick(index)">回复</span>
                        </p>
                    </div>
                </div>
            </article>
        </div>
    </article>
</template>
<script lang="ts" setup>
import { Comment } from "@/utils/request/comment"
import { useCommentInput, useClearInput } from "@/utils/comm"
import { CommentService } from "@/utils/request/comment"
const prop = defineProps({
    data: {
        type: Object as PropType<Comment>,
        required: true
    }
})



const commentRef = ref();
const replieRef = ref();
const inputKey = ref(-1);

const inputCallBack = async function (content: string) {
    console.log(inputKey)
    if (inputKey.value === -1) {
       
        const requestBody = {
            content,
            commentId: prop.data.commentId
        }
        await CommentService.addReply({ requestBody })
    }else{
        const replie = prop.data.replies[inputKey.value];
        const recipientId = replie.senderId
        const requestBody = {
            content,
            recipientId,
            commentId: prop.data.commentId
        }
        await CommentService.addReply({ requestBody })
    }
}

const commentReplieBtnClick = function (key: number) {
    //记录key值
    inputKey.value = key
    //清理所有输入框
    useClearInput()
    //找到输入框展开位置的dom
    let el = null;
    if (key === -1) {
        el = commentRef.value
    } else {
        el = replieRef.value[key]
    }
    //在当前位置注入输入框
    useCommentInput(el, inputCallBack);
}
</script>

<style>
.time {
    margin-left: 0.5rem;
    font-size: 14px;
    color: #848484;
    font-size: 12px;
    font-weight: 400;
}

.comment-footer,
.replie-footer {
    margin-top: 0.75rem;
}

.reply-btn {
    cursor: pointer;
}
</style>
