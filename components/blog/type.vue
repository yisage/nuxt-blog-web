<template>
    <Card>
        分类
        {{ articleTypeList }}
    </Card>
</template>

<script lang="ts" setup>
defineProps({
    articleTypeList:Array as PropType<any[]>,
})
</script>

<style lang="scss" scoped></style>