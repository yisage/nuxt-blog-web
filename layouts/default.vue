<template>
    <div class="page-box">
        <client-only>
            <AppHeader></AppHeader>
        </client-only>
        <slot class="slot"></slot>
        <AppFooter></AppFooter>
    </div>
</template>

<script setup lang="ts">
onMounted(() => {

})
</script>

<style lang="scss" scoped>

</style>