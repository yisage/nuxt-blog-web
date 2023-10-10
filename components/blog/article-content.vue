<template>
    <div class="column order-1 column-main is-8-tablet is-8-desktop is-8-widescreen">
        <Card>
            <div class="article-img">
                <span class="image">
                    <img :src='coverUrl' alt="" class="fill">
                </span>
            </div>
            <article id="vditor" ref="vditor"></article>
        </Card>
    </div>
</template>
<script lang="ts" setup>

defineProps({
    coverUrl:{
        type:String,
        required:true
    }
})

const emit = defineEmits(['renderVditor'])

const vditor = ref<HTMLDivElement>()

onMounted(()=>{
    emit('renderVditor',vditor.value)
})

</script>