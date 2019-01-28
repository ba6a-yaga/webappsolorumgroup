<template>
    <header id="App-header">
        <div class="logo-header"></div>
        <div class="title-header" v-html="title"></div>
        <div class="banner-header">
            <Banner :list=list :style-img="this.data.styleImage">
                <template slot-scope="slotProps">
                    <div class="content-banner">
                        <Description
                                id="description-header"
                                :more="slotProps.text.more"
                                :title="slotProps.text.title"
                                :desc="slotProps.text.desc"
                                :isUnderline=true />
                        <ButtonComponent id="button-header">Подробнее</ButtonComponent>
                    </div>
                </template>
            </Banner>
        </div>
    </header>
</template>

<script>
    import Banner from "../components/Banner"
    import ButtonComponent from "../components/ButtonComponent"
    import Description from "../components/Description"
    export default {
        name: "Header",
        data() {
            return {
                data: {
                    styleImage: {
                        'min-height': '294px',
                        'object-fit': 'cover',
                        'object-position': '0% 0%',
                        width: '100%',
                        height: '100%',
                    }
                }
            }
        },
        props: {
            title: String,
            list: Array,
        },
        components: {
            Banner,
            ButtonComponent,
            Description
        }
    }
</script>

<style lang="scss">
#App-header {

    background: #F7F7FE;

    display: grid;
    grid-template-columns: 100px repeat(8, 1fr) 100px;
    grid-template-rows: auto;

    #description-header {
        grid-row: 1 / span 3;
        align-self: center;
        color: #FFFFFF;
        margin-left: 25px;
    }

    #button-header {
        grid-row: 4;
        justify-self: flex-start;
        margin-left: 25px;

        width: 144px;
        height: 42px;
    }

    .logo-header {
        grid-column: 2 / span 1;
        margin: 25px;
        margin-left: -50px;

        width: 160px;
        height: 40px;
        background: #243141;
        mask: url('../assets/logo-full.svg') center / contain no-repeat;
    }

    .title-header {
        margin-top: 25px;

        grid-column: 2 / span 5;
        grid-row: 2;

        font-size: 36px;
        font-family: Axiforma-Regular;
        font-variant-caps: normal;
        line-height: 46px;
        color: #243141;

        &:after {
            content: 'крупного бизнеса |';
            font-family: Axiforma-ExtraBold;
        }
    }

    .banner-header {
        margin-top: 50px;
        margin-bottom: 100px;

        width: 776px;
        height: 294px;

        grid-column: 2 / span 8;
        grid-row: 3;

        background: #243141;
    }

    .content-banner {
        height: 100%;
        max-height: 294px;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, 1fr);
    }
}
</style>
