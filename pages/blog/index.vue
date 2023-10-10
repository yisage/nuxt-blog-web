<template>
    <section class="section">
        <div class="columns">
            <article class="column order-2 column-main is-8-tablet is-8-desktop is-6-widescreen ">
                <BlogCard :articleList="articleList"></BlogCard>
            </article>
            <article class="column column-left is-4-tablet is-4-desktop is-3-widescreen  order-1 is-hidden-touch">
                <IndexBasicInfo></IndexBasicInfo>
            </article>
            <article
                class="column column-right is-4-tablet is-4-desktop is-3-widescreen is-hidden-touch is-hidden-desktop-only order-3">
                <BlogTag></BlogTag>
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

const { articleList } = await ArticleService.getArticleList(params.typeId);

</script>   