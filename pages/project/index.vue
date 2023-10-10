<template>
    <section class="section ">
        <Card>

        </Card>
    </section>
</template>

<script lang="ts" setup>
const projectList = ref([
    {
        projectName: '研发云平台',
        description: 'State R&D Cloud是中国电信为实现企业研发数字化转型而打造的研发信息基础设施，是中国电信集约的一站式云上研发协同平台。研发云平台赋能研发攻关，支持内外部上云服务，是国家云的重要组成部分。'
    }
])
</script>

<style lang="scss" scoped>
.section {
    width: 50%;
    margin: 0 auto;
    padding: 3rem 1.5rem;
    min-height: 100rem;
    p {
        color: #cdcdcd;
        margin: 1rem 0rem;
    }

    a {
        color: #fcee09;
        margin: 0px 1px;
    }
}
</style>