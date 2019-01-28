<template>
    <div id="App-footer">
        <ButtonComponent
                id="c-btn"
                :is-mini=true
                :is-arrow-up=true />
        <p class="footer-desc" v-html="descsription"></p>
        <p class="footer-policy" v-html="policy"></p>
    </div>
</template>

<script>
    import ButtonComponent from '../components/ButtonComponent'
    export default {
        name: "FooterContainer",
        props: {
            descsription: String,
            policy: String,
        },
        components: {
            ButtonComponent
        }
    }
</script>

<style lang="scss">
    #App-footer {
        display: grid;
        grid-template-columns: 100px repeat(8, 1fr) 100px;
        grid-template-rows: 100px;

        #c-btn {
            grid-column: 2;
            align-self: center;
        }

        .footer-desc {
            grid-column: 3 / span 3;
            align-self: center;

            font-size: 13px;
            font-family: Axiforma-Regular;
        }

        .footer-policy {
            grid-column: 6 / span 2;
            align-self: center;

            font-size: 13px;
            font-family: Axiforma-Regular;
            color: rgba(36,49,65, 0.4);
            text-decoration: none;
            border-bottom: 1px solid rgba(36,49,65, 0.4);
            width:84%;
        }
    }
</style>
