<template>
    <input
            class="c-input"
            :placeholder="textDefault" size=5 />
</template>

<script>
    export default {
        name: "InputComponent",
        props: {
            textDefault: String,
        },
    }
</script>

<style lang="scss">
    .c-input {
        border-top: transparent;
        border-left: transparent;
        border-right: transparent;
        border-bottom: gray;
        border-style: solid;
        border-width: 2px;
        background: transparent;

        color: #243141;
        font-size: 18px;
        font-family: Axiforma-Medium;

        &::placeholder {
            opacity: 1;
        }
    }
</style>