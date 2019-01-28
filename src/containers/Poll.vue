<template>
    <div id="App-poll">
        <Description
                id="description-poll"
                 :title="description.title" />
        <div class="empty-block-1" />
        <div class="empty-block-2" />
        <div class="container">
            <div
                    :key="i"
                    class="block"
                    v-for="(q, i) in questions" >
                <div
                        class="question"
                        v-html="q.title" >
                </div>
                <div class="icons" >
                    <img
                            class="icon"
                            :key="i"
                            :src="source"
                            v-for="(source, i) in q.icons" />
                </div>
                <div
                        class="answer"
                        v-html="q.desc" >
                </div>
            </div>
        </div>
        <div class="empty-block-3" />
    </div>
</template>

<script>
    import Description from "../components/Description"
    export default {
        name: "Poll",
        props: {
            description: Object,
            questions: Array,
        },
        components: {
            Description
        }
    }
</script>

<style lang="scss">
#App-poll {
    opacity: 0;
    display: grid;
    grid-template-columns: 100px repeat(8, 1fr) 100px;
    grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));

    #description-poll {
        grid-column: 2 / span 4;
        grid-row: 2;
        align-self: flex-end;
    }

    .empty-block-1 {
        grid-column: 2;
        grid-row: 1;
        height: 100px;
    }

    .empty-block-2 {
        grid-column: 2;
        grid-row: 3;
        height: 100px;
    }

    .empty-block-3 {
        grid-column: 2;
        grid-row: auto;
        height: 100px;
    }

    .container {
        grid-column: 2 / span 6;
        grid-row: auto;

        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 50px;

        .block {
            display: grid;
            grid-template-columns: repeat(2, 1fr);

            .question {
                grid-column: 1;
                align-self: flex-start;
                font-size: 18px;
                font-family: Axiforma-SemiBold;
            }

            .answer {
                margin-top: 25px;
                grid-column: 2;
                align-self: flex-end;
                font-size: 13px;
                font-family: Axiforma-Regular;
            }

            .icons {
                display: flex;
                flex-direction: row;
            }

            .icon {
                grid-column: 2;
                grid-row: 1;
                align-self: flex-start;
                margin-right: 15px;
                width: 56px;
                height: 56px;
            }
        }
    }
}
</style>