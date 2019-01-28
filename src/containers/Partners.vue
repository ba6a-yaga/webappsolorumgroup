<template>
    <div id="App-partners">
        <Description
                class="desc-partners"
                :title="description.title"
                :desc="description.desc" />
        <Carousel
                class="banner-partners"
                :list="icons"
                :style-img="this.data.styleImage"/>
    </div>
</template>

<script>
    import Description from "../components/Description"
    import Carousel from "../components/Carousel"
    export default {
        name: "Partners",
        data() {
            return {
                data: {
                    styleImage: {
                        minHeight: '17px',
                    }
                }
            }
        },
        props: {
            description: Object,
            icons: Array,
        },
        components: {
            Description,
            Carousel
        },
    }
</script>

<style lang="scss">
#App-partners {
    background: #F7F7FE;

    display: grid;
    grid-template-columns: 100px repeat(8, 1fr) 100px;
    grid-template-rows: 75px repeat(2, 1fr);
    grid-row-gap: 25px;

    .desc-partners {
        grid-column: 2 / span 4;
        grid-row: 2;

        align-self: flex-start;
    }

    .banner-partners {
        grid-column: 2 / span 8;
        grid-row: 3;
        height: 60px;
        max-width: 800px;
    }
}
</style>