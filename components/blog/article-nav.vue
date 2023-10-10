<template>
    <div class="column column-right is-4-tablet is-4-desktop is-4-widescreen  order-2 is-hidden-mobile">
        <Card>
            <h3>目录</h3>
            <div class="outlline" ref="outlline">
                <blog-nav-item :outline="outline||[]"></blog-nav-item>
            </div>
        </Card>
    </div>
</template>

<script lang="ts" setup>
import { VNode } from './type';
defineProps({
    outline: {
        type: Array as PropType<VNode[]>,
        required: true
    }
})
</script>

<style scoped>
h3 {
    color: #02d7f2;
}

.outlline {
    margin-top: 0.75rem;
}

.outlline-item {
    height: 32px;
    display: flex;
    align-items: center;
}
</style>