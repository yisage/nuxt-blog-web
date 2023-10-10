<template>
    <Card>
        标签
        {{ articleTagList }}
    </Card>
</template>

<script lang="ts" setup>
defineProps({
    articleTagList: {
        type: Array as PropType<any[]>,
        default: () => [{ id: 1, name: '前端' }]
    }

})
</script>

<style lang="scss" scoped></style>