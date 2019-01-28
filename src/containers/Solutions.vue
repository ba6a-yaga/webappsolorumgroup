<template>
    <div id="App-solutions">
        <Description id="description-solutions"
                     :title="title"
                     :desc="desc" />
        <div class="empty-block-1" />
        <div class="container">
            <div class="block" :key="i" v-for="(b,i) in blocks">
                <Description class="desc-solutions"
                            :title="b.title"
                             :desc="b.desc"
                             :is-mini=true />
                <ButtonComponent class="btn-solutions" :is-mini=true ></ButtonComponent>
            </div>
        </div>
    </div>
</template>

<script>
    import Description from "../components/Description"
    import ButtonComponent from "../components/ButtonComponent"
    export default {
        name: "Solutions",
        props: {
            title: String,
            desc: String,
            blocks: Array,
        },
        components: {
            Description,
            ButtonComponent,
        }
    }
</script>

<style lang="scss">
#App-solutions {
    display: grid;
    grid-template-columns: 100px repeat(8, 1fr) 100px;
    grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));

    #description-solutions {
        grid-row: 2 / span 2;
        grid-column: 2 / span 4;
    }

    .empty-block-1 {
        grid-column: 2;
        grid-row: 4;
        height: 100px;
    }

    .empty-block-2 {
        grid-column: 2;
        grid-row: 15;
        height: 100px;
    }

    .container {
        grid-row: auto / span 10;
        grid-column: 2 / span 6;

        display: grid;
        grid-template-columns: repeat(3, 265px);
        grid-template-rows: repeat(3, 265px);
        grid-gap: 5px;

        .block {
            background: #F7F7FE;
            display: grid;
            align-content: space-around;

            .desc-solutions {
                margin-left: 20px;
            }

            .btn-solutions {
                margin-left: 20px;
            }
        }
    }
}
</style>