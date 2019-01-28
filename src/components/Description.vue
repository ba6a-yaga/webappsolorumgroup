<template>
    <div class="description">
        <div v-if="more" class="more">{{more}}</div>
        <div :class="['title', {underline: isUnderline, 'title-mini': isMini}]"
             v-html="title"></div>
        <div :class="['desc', {'desc-mini': isMini}]"
             v-html="desc"></div>
    </div>
</template>

<script>
    export default {
        name: "Description",
        props: {
            more: String,
            title: String,
            desc: String,
            isUnderline: Boolean,
            isMini: Boolean,
        }
    }
</script>

<style lang="scss">
    .description {
        .more,.desc {
            font-family: Axiforma-Regular;
        }

        .title {
            font-family: Axiforma-Bold;
        }

        .more {
            font-size: 11px;
            margin-bottom: 15px;
        }

        .title {
            font-size: 24px;
            margin-bottom: 15px;
        }

        .desc {
            font-size: 15px;
            line-height: 20px;
        }

        .title-mini {
            font-family: Axiforma-SemiBold;
            font-size: 18px;
        }

        .desc-mini {
            font-size: 13px;
        }

        .underline {
            text-decoration: underline;
        }


    }
</style>