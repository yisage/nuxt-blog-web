<template>
    <ul :style="{ paddingLeft: `${paddingLeft}px` }">
        <renderLi></renderLi>
    </ul>
</template>
<script lang="tsx" setup >
import BlogNavItem from './nav-item.vue';
import { VNode } from './type';
const props = defineProps({
    outline: {
        type: Array as PropType<VNode[]>,
        required: true
    },
    paddingLeft: {
        type: Number,
        default: 0
    }
})

const renderLi = () => {
    return props.outline.map(el => h('li', { class: 'nav-item' }, renderH(el)))
}

const renderH = (el: VNode) => {
    const tag = `h${el.level}`
    const href = `#${el.href}`
    const text = el.text
    if (el.children && el.children.length) {
        return renderBindEl(el)
    } else {
        return h(`${tag}`, h('a', { href, text }))
    }
}

const renderBindEl = (el: VNode) => {
    const tag = `h${el.level}`
    const href = `#${el.href}`
    const text = el.text
    return [
        h(`${tag}`, h('a', { href, text })),
        h(BlogNavItem, { outline: el.children, paddingLeft: 15 })
    ]
}

</script>

<style scopen lang="scss">
.nav-item {
    line-height: 1.25;

    a {
        display: flex;
        clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
        -webkit-clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
        padding: 0.5em 0.75em;
    }
}
</style>
