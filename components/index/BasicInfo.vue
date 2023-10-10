<template>
    <Card>
        <figure class="figure">
            <p>
                <img src="https://img.wb0311.com/uploadimg/ico/2022/0402/1648864555691514.jpg" alt="阿贾克斯">
            </p>
            <p class="title title is-size-4 is-flex justify-content-center">朋克赛安</p>
            <p class="is-size-6 is-flex justify-content-center">费伦主位面</p>
            <nav class="nav-info columns is-mobile">
                <div v-for="(item, index) in data" :key="index" class="column is-one-third">
                    <div class="item">
                        <p class="heading">{{ item.label }}</p>
                        <p class="title">{{ item.total }}</p>
                    </div>
                </div>
            </nav>
        </figure>
    </Card>
</template>
<script lang="ts" setup>
const data = ref([
    {
        label: "文章",
        total: 99
    },
    {
        label: "分类",
        total: 99
    },
    {
        label: "标签",
        total: 99
    }
])

</script>

<style lang="scss" scoped>  
.figure {
    color: #cdcdcd;

    img {
        width: 128px;
        height: 78px;
    }

    p {
        display: flex;
        justify-content: center;
        margin: 10px 0px;
    }

    .title {
        color: #fcee09;
    }

    .item {
        cursor: pointer;
    }

}
</style>