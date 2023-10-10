<template>
    <Card>
        <ul>
            <li v-for="(parent, index) in data" :key="index" class="parent-item">
                <a href="javascript:;">{{ parent.label }}</a>
                <ul v-if="parent.childer">
                    <li v-for="(childer, cIndex) in parent.childer" :key="cIndex">
                       <a href="javascript:;">
                        {{ childer.label }}
                       </a>
                    </li>
                </ul>
            </li>
        </ul>
    </Card>
</template>
<script lang="ts" setup>
const data = ref([
    {
        label: "格式化",
        childer: [
            {
                label: 'JSON格式化'
            }
        ]
    },
    {
        label: "编码转换",
        childer: [
            {
                label: 'base64编码转换'
            },
            {
                label: 'URL编码'
            },
            {
                label: 'MD5加密'
            }
        ]
    },
    {
        label: "其它"
    }
])

</script>

<style lang="scss" scoped>
.parent-item a {
    border-radius: 0;
    color: #cdcdcd;
    padding: 0.5em 0.75em;
    display: block;
    clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
    -webkit-clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
}   
.parent-item a:hover{
    background-color: #fcee09;
    color: #000;
}
.parent-item ul {
    border-left: 1px solid #cdcdcd;
    margin: 0.75em;
    padding-left: 0.75em;
}
</style>