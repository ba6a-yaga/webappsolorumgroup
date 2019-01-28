<template>
    <div>
        <div class="carousel">
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
        <div class="nav-carousel">
            <hr class="default active"/>
            <hr class="default"/>
            <hr class="default"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Carousel",
        props: {
            list: Array,
            styleImg: Object,
        }
    }
</script>

<style lang="scss">
    .carousel {
        display: grid;
        grid-template-columns: repeat(auto-fill, 25%);

        overflow-y: hidden;
        overflow-x: hidden;

        .list {
            grid-row: 1;

            // Добавлен grid что не выходил за рамки png
            // Убрать - найти другое решение
            display: grid;
            grid-template-columns: 1fr;

            .img-banner {
                justify-self: flex-start;
                align-self: center;
                width:80%;
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

    .nav-carousel {
        margin-top: 25px;

        display: grid;
        grid-template-columns: repeat(auto-fill, 65px);
        grid-column-gap: 25px;

        hr {
            justify-self: flex-start;
            align-self: center;
            width: 100%;
            border-width: 2px;
        }

        .default {
            border-color: #243141;
        }

        .active {
            border-color: #798599;
        }
    }
</style>