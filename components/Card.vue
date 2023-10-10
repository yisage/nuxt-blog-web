<template>
    <div class="card-container">
        <div class="card-content">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.card-container {
    position: relative;
    background-color: transparent;
    counter-increment: card;
    .card-content {
        background-color: transparent;
        padding: 1.5rem;
        position: relative;

        &:before {
            content: '';
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #000;
            clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px), 0 0);
            -webkit-clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px), 0 0);
        }

    }

    &:before {
        content: '';
        position: absolute;
        z-index: -1;
        clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px), 0 0);
        -webkit-clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px), 0 0);
        top: -1.2px;
        left: -1.2px;
        right: -1.2px;
        bottom: -1.2px;
        background-color: #02d7f2;
    }

    &:after {
        content: 'R' counter(card);
        position: absolute;
        color: #02d7f2;
        right: 2rem;
        bottom: -0.6em;
        font-size: 0.75rem;
        padding: 0 0.25em;
        background: #000;
    }
}

.card-container+.card-container {
    margin-top: 1.5rem;
}
</style>