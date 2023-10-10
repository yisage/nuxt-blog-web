<template>
    <Card>
        <h3 class="card-label">标签</h3>
        <div class="content">
            <a href="javascript:;" class="tags" v-for="item in tagList">
                <span class="name">{{ item.name }}</span>
                <span class="sum">99</span>
            </a>
        </div>
    </Card>
</template>
<script lang="ts" setup>
import { UnRetutnPromiseType } from 'utils/toolType';
import { ArticleService } from "@/utils/request/article"

type TagList = UnRetutnPromiseType<typeof ArticleService.getTagList>['tagList'];

defineProps({
    tagList: {
        type: Array as PropType<TagList>,
        required: true
    }
})
</script>

<style lang="scss" scoped>
.card-label {
    color: #02d7f2;
    font-size: 0.75em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
}

.content {
    margin-top: 0.75rem;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;

    .tags {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        margin: 0 0.75rem 0.75rem 0;

        .name {
            display: inline-flex;
            font-size: 0.75rem;
            height: 2em;
            justify-content: center;
            line-height: 1.5;
            padding-left: 0.75em;
            padding-right: 0.75em;
            white-space: nowrap;
            background: #fcee09;
            color: #121617;
        }

        .sum {
            display: inline-flex;
            font-size: 0.75rem;
            height: 2em;
            justify-content: center;
            line-height: 1.5;
            padding-left: 0.75em;
            padding-right: 0.75em;
            white-space: nowrap;
            background: #02d7f2;
            color: #121617;
        }
    }
}
</style>