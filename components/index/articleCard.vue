<template>
    <Card tag="alticle">
        <div class="alticle-img">
            <a href="javascript:;">
                <img :src="coverUrl" alt="">
            </a>
        </div>

        <div class="article-content">
            <div class="article-meta">
                <span class="item">
                    {{ createdAt }}发表
                </span>
                <span class="item">
                    {{ updatedAt }}更新
                </span>
                <span class="item ">
                    <a class="article-tag" href="javascript:;" v-for="tag in articleTags" :key="tag.id">
                        {{ tag.name }}
                    </a>
                </span>
            </div>
            <div class="title is-3 is-size-4-mobile">
                <a href="javascript:;">
                    {{ title }}
                </a>
            </div>
            <blockquote class="abstract">
                {{ abstract }}
            </blockquote>
            <!-- <a href="javascript:;" class="article-more button is-small is-size-7">
                阅读全文
            </a> -->
            <NuxtLink  class="article-more button is-small is-size-7" :to="detailsHref">
                阅读全文
            </NuxtLink>
        </div>
    </Card>
</template>
<script lang="ts" setup>

const props = defineProps({
    articleData: {
        type: Object as any,
        required: true
    }
})

const { createdAt, updatedAt, articleTags, title, abstract, articleId: id } = toRefs(props.articleData)

const defaultCoverUrl = 'https://ivocin.github.io/images/js-guide-book-buy.jpeg'
const imgBaseUrl = useRuntimeConfig().public.imgUrl
const coverUrl = computed(() => {
    if (props.articleData.coverUrl) {
        return `${imgBaseUrl}/${props.articleData.coverUrl}`
    }
    return defaultCoverUrl
});

const detailsHref = `/blog/${id.value}`

</script>

<style lang="scss" scoped>
::v-deep .card-content {
    padding: 0;
}

.alticle-img {
    overflow: hidden;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%);
    -webkit-clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%);

    a {
        display: block;
        padding-top: 44.2%;
        position: relative;
        img {
            bottom: 0;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
            object-fit: cover;
            width: 100% !important;
            height: 100% !important;
        }
    }

}

.article-content {
    padding: 1.5rem;
    padding-bottom: 0;
}

.article-meta {
    color: #848484;

    .item {
        margin-right: 0.9rem;
    }

    .article-tag {
        margin-right: 0.5rem;

    }

    .article-tag:not(:last-child)::after {
        content: ' / ';
        position: relative;
        left: .2rem;
        color: #848484;

    }

    .article-tag:hover {
        color: #fcee09;
    }

    margin-bottom: .5rem;

}

.title {
    color: #fcee09;
    font-weight: 400;
}

.abstract {
    background: transparent;
    border: 0.5px solid #02d7f2;
    border-left: 5px solid #02d7f2;
    padding: 1.25em 1.5em;
    color: #cdcdcd;
    margin-bottom: 1rem;
}

.button {
    border-color: transparent;
    color: rgba(0, 0, 0, 0.7);
    background-color: #02d7f2;
    color: #121617;
    clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
    -webkit-clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
}


.button:before {}
</style>