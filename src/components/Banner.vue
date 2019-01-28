<template>
    <div class="banner">
        <section class="list"
                 v-for="(l,i) in list"
                 :key="i" >
            <img class="img-banner"
                 :src="l.img.src"
                 :style="styleImg" />
            <div class="content"
                 v-if="l.text" >
                <slot :text="l.text"></slot>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Banner",
        props: {
            list: Array,
            styleImg: Object,
        }
    }
</script>

<style lang="scss">
    .banner {
        display: grid;
        grid-template-columns: repeat(auto-fill, 100%);

        overflow-y: hidden;
        overflow-x: hidden;

        .list {
            grid-row: 1;

            // Добавлен grid что не выходил за рамки png
            // Убрать - найти другое решение
            display: grid;
            grid-template-columns: 1fr;

            .img-banner {
                z-index: 1;
                grid-column: 1;
                grid-row: 1;
            }

            .content {
                z-index: 2;
                grid-column: 1;
                grid-row: 1;
            }
        }
    }
</style>