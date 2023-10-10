<template>
    <article class="media">
    <figure class="media-left">
        <p class="image is-64x64"> <img src="https://bulma.zcopy.site/images/placeholders/128x128.png"> </p>
    </figure>
    <div class="media-content">
        <p class="comment-user-name name-color">{{ data.name }} <span  class="time">{{ data.createdAt }}</span></p>
        <div class="content" ref="commentContainer">
            {{ data.content }}
            <p class="comment-footer">
                <span class="reply-btn" @click="submit">回复</span>
            </p>
        </div>
        <article class="media" v-for="replie in data.replies">
            <figure class="media-left">
                <p class="image is-48x48"> <img src="https://bulma.zcopy.site/images/placeholders/96x96.png">
                </p>
            </figure>
            <div class="media-content">
                <p class="replie-title">
                    <span class="name-color">{{ replie.senderName }}</span>
                    <span class="replie-text" v-if="replie.recipientName!==data.name">回复</span>
                    <span class="name-color" v-if="replie.recipientName!==data.name">{{ replie.recipientName }}</span>
                    <span class="name-color">：</span>
                </p>
                <div class="content" ref="replieContainer">
                    {{ replie.content }}
                </div>
            </div>
        </article>
    </div>
</article>
</template>
<script lang="ts" setup>
import { Comment } from "@/utils/request/comment"
defineProps({
    data: {
        type: Object as PropType<Comment>,
        required: true
    }
})

const commentContainer = ref(null);
const replieContainer = ref(null);

onMounted(()=>{
    console.log(replieContainer.value)
})

const submit = function(){

}
</script>

<style>
.time{
    margin-left: 0.5rem;
    font-size: 14px;
    color: #848484;
    font-size: 12px;
    font-weight: 400;
}
.comment-footer{
    margin-top: 0.75rem;
}
.reply-btn{
    cursor: pointer;
}
</style>
