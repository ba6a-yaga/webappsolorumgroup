<template>
    <a :class="['default',{mini:isMini,'style-transparent':isTransparent,'style-mini-border-none':isArrowUp}]">
        <div v-if="isMini" :class="['arrow-right',{'arrow-up':isArrowUp}]"></div>
        <slot></slot>
    </a>
</template>

<script>
    export default {
        name: "ButtonComponent",
        props: {
            isMini: Boolean,
            isTransparent: Boolean,
            isArrowUp: Boolean,
        }
    }
</script>

<style lang="scss">
    .default, .mini {
        cursor: pointer;
    }

    .default {
        font-family: Axiforma-Medium;
        background: #F7F7FE;
        color: #243141;
        font-size: 13px;
        text-align: center;
        line-height: 40px;
        border-radius: 25px;
    }

    .mini {
        z-index: 1;
        display: flex;
        width: 32px;
        height: 32px;
        border-style: solid;
        border-radius: 50%;
        border-width: 1px;
        border-color: #243141;
        background: transparent;

        .arrow-right {
            margin: 10px;
            z-index: 2;
            width: 100%;
            background: #243141;
            mask: url('../assets/arrow.svg') center / contain no-repeat;
        }

        .arrow-up {
            border-color: transparent;
            margin: 10px;
            z-index: 2;
            width: 100%;
            background: #243141;
            mask: url('../assets/arrow.svg') center / contain no-repeat;
            transform: rotate(270deg);
        }
    }

    .style-mini-border-none {
        background: #F7F7FE;
        border: none;
    }

    .style-transparent {
        background: transparent;
        border: 1px solid rgba(36,49,65, 0.3)
    }

</style>