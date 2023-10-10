<template>
    <Card>
        <h3 class="tag is-primary">2021</h3>
        <div class="timeline">
            <article class="article-item" v-for="(item, index) in articleList" :key="item.id">
                <figure class="media-left">
                    <a href="javascript:;" class="image">
                        <img src="https://www.pragimtech.com/wp-content/uploads/2019/03/java-script.jpg" alt="图片">
                    </a>
                </figure>
                <div class="content-right">
                    <p class="date">{{ item.updatedAt }}</p>
                    <p class="title">
                        <NuxtLink :to="`/blog/${item.articleId}`">
                            {{ item.title }}
                        </NuxtLink>
                    </p>
                    <p class="categories">
                        <a href="javascript:;" class="categories-tag" v-for="(tag, index) in item.articleTags">{{ tag.name
                        }}<em v-if="index < item.articleTags.length - 1"> / </em></a>
                    </p>
                </div>
            </article>
        </div>
    </Card>
</template>

<script lang="ts" setup>
defineProps({
    articleList: {
        type: Array as any,
        required: true
    }
})
</script>

<style lang="scss" scoped>
.timeline {
    margin-left: 1rem;
    padding: 1rem 0 0 1.5rem;
    border-left: 1px solid #02d7f2;
}

.timeline .article-item:before {
    content: '';
    width: 0.75rem;
    height: 0.75rem;
    display: block;
    position: absolute;
    left: calc(-0.375rem - 1.5rem - 0.25px);
    background: #02d7f2;
    border-radius: 50%;
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    top: calc(1rem + 1.5 * 0.85rem / 2 - 0.75rem / 2);
}

.timeline .article-item:last-child:after {
    content: '';
    display: block;
    position: absolute;
    left: calc(-0.375rem - 1.5rem - 0.25px);
    width: 0.75rem;
    top: calc(1rem + 1.5 * 0.85rem / 2 + 0.75rem / 2);
    bottom: 0;
    background: #000;
}

.article-item {
    display: flex;


    position: relative;

    figure.media-left {
        margin-right: 10px;

        .image {
            width: 64px;
            height: 64px;
            display: block;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .content-right {

        p {
            line-height: inherit;
        }

        .date,
        .categories {
            font-size: 0.85rem;
            color: #848484;
        }

        .categories-tag:hover {
            color: #fcee09;
        }

        .title {
            color: #fcee09;
            font-weight: 400;
            font-size: 1rem;
            margin: 0;
            cursor: pointer;
        }
    }
}

.article-item:not(:last-child) {
    margin-bottom: 0.75rem;
}

.article-item+.article-item {
    padding-top: 1rem;
}
</style>