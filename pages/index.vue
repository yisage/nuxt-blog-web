<template>
    <section class="section">
        <div class="columns container">
            <article class="column order-2 column-main is-8-tablet is-8-desktop is-6-widescreen">
                <IndexArticleCard v-for="(item) in articleList" :articleData="item" :key="item.articleId">
                </IndexArticleCard>
            </article>
            <article class="column column-left is-4-tablet is-4-desktop is-3-widescreen  order-1">
                <IndexBasicInfo></IndexBasicInfo>
                <IndexTool></IndexTool>
            </article>
            <article
                class="column column-right is-4-tablet is-4-desktop is-3-widescreen is-hidden-touch is-hidden-desktop-only order-3">
                <IndexNewArticle :articleList="articleList"></IndexNewArticle>
                <IndexTagCard :tagList="tagList"></IndexTagCard>
            </article>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ArticleService } from "@/utils/request/article"

const params = reactive({
    typeId: 0,
    currentPage: 1,
    pageSize: 10
});

const { articleList } = await ArticleService.getArticleList({ typeId: params.typeId });
const { tagList } = await ArticleService.getTagList()

</script>

<style lang="scss" scoped>
.section {
    padding: 3rem 1.5rem;
    margin: 0 auto;

    .container {
        margin: 0 auto;
    }
}
</style>