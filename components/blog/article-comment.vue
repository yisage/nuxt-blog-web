<template>
    <div class="column order-1 column-main is-8-tablet is-8-desktop is-8-widescreen">
        <Card>
            <h3 class="title is-5">评论</h3>
            <BlogCommentInput @submit="submit"></BlogCommentInput>
            <BlogCommentItem v-for="data in commentList" :data="data" :key="data.commentId"></BlogCommentItem>
        </Card>
    </div>
</template>

<script lang="ts" setup>
import { CommentService, Comment } from "@/utils/request/comment"

const props = defineProps({
    articleId: {
        type: Number,
        required: true
    }
})

const { articleId } = props
const commentList = ref<Comment[]>([])



const getCommentList = async function () {
    const res = await CommentService.getCommentList({ articleId })
    commentList.value = res.data
}
getCommentList()

const submit = async function (content: string) {
    const requestBody = {
        articleId,
        content
    }
    await CommentService.addComment({ requestBody });
    Message.success('评论成功!');
    getCommentList()

}

</script>

<style>
.comment-user-name {
    font-weight: 700;
}

.name-color {
    color: #fcee09;
    cursor: pointer;
}

.media-content .content {
    margin-top: 0.5rem;
    color: #cdcdcd;
}

.replie-text {
    margin: 0px 5px;
    color: #2196F3;
}
</style>