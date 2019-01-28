<template>
    <div id="App-features">
        <Description
                id="desc-features"
                :title="description.title"
                :desc="description.desc" />
        <div class="container">
            <div
                    :key="i"
                    class="block"
                    v-for="(l, i) in list" >
                <Description
                        class="block-features-desc"
                        :title="l.title"
                        :desc="l.desc"
                        :is-mini=true />
            </div>
        </div>
    </div>
</template>

<script>
    import Description from '../components/Description'
    export default {
        name: "Features",
        props: {
            description: Object,
            list: Array,
        },
        components: {
            Description,
        }
    }
</script>

<style lang="scss">
    #App-features {
        opacity: 0;
        display: grid;
        grid-template-columns: 100px repeat(8, 1fr) 100px;
        grid-template-rows: 75px repeat(2, 1fr) 75px;
        grid-row-gap: 25px;

        #desc-features {
            grid-column: 2 / span 4;
            grid-row: 2;

            align-self: flex-start;
        }

        .container {
            grid-column: 2 / span 6;
            grid-row: 3;

            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-column-gap: 50px;

            .block {
                .block-features-desc {
                    &:before {
                        margin-bottom: 25px;
                        display: flex;
                        content: '';
                        width: 32px;
                        height: 32px;
                        background: #243141;
                        mask: url("../assets/round.svg") center;
                    }
                }
            }
        }
    }
</style>