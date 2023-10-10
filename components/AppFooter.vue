<template>
    <footer class="footer">
        <div class="content">
            © 2023 huangjia.xyz 
            <a href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备2023003538号</a>
        </div>
    </footer>
</template>
  
<script setup lang="ts">

</script>
  
<style lang="scss" scoped>
.footer {
    background-color: #fcee09;
    padding: 3rem 1.5rem 6rem;
    color: #000;
    position: relative;
 
}

.footer:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: -1px;
    height: 39px;
    background: url(https://ivocin.github.io/img/razor-bottom-black.svg) repeat-x top;
}
.content{
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;

    a{
        color: #02d7f2;
        margin-left: 5px;
    }
}
</style>