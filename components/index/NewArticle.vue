<template>
    <Card>
        <h3 class="card-label">最新文章</h3>
        <article v-for="article in articleList.slice(0, 5)" :key="article.articleId" class="article-item">
            <figure>
                <a href="javascript:;" class="image">
                    <img src="https://ivocin.github.io/images/js-guide-book-buy.jpeg" alt="">
                </a>
            </figure>
            <div class="content">
                <p class="date">{{ article.updatedAt }}</p>
                <p class="title">{{ article.title }}</p>
                <p class="article-tag-warp">
                    <a class="article-tag" href="javascript:;" v-for="tag in article.articleTags" :key="tag.id">
                        {{ tag.name }}
                    </a>
                </p>
            </div>
        </article>
    </Card>
</template>
<script lang="ts" setup>
import { UnRetutnPromiseType } from 'utils/toolType';
import { ArticleService } from "@/utils/request/article"

type ArticleList = UnRetutnPromiseType<typeof ArticleService.getArticleList>['articleList']
    
defineProps({
    articleList: {
        type: Array as PropType<ArticleList>,
        required: true
    }
})

</script>

<style lang="scss" scoped> .card-label {
     color: #02d7f2;
     font-size: 0.75em;
     letter-spacing: 0.1em;
     text-transform: uppercase;
 }

 .article-item {
     display: flex;
    margin-bottom: 0.75rem;
     figure {
         margin-right: 1rem;

         .image {
             width: 64px;
             height: 64px;
             img{
                width: 100%;
                height: 100%;
             }
         }
     }

     p {
         margin-bottom: 0rem;
     }

     .date,.article-tag-warp {
         font-size: 0.85rem;
     }

     .title {
         font-size: 1rem;
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

 }</style>