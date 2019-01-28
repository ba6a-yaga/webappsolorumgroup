<template>
    <div id="App-callback">
        <Description
                v-scroll="handleScroll"
                id="desc-callback"
                :title="description.title"
                :desc="description.desc" />
        <form id="form-callback" v-scroll="handleScroll">
            <InputComponent :text-default="form.title" />
            <ButtonComponent
                    id="button-callback"
                    :is-transparent=true >
                {{form.btn.title}}
            </ButtonComponent>
            <p id="form-agreement" v-html="form.agreement"></p>
        </form>
        <img id="bg" src="../assets/plane@2x.png" v-scroll="handleScroll"/>
    </div>
</template>

<script>
    import Description from '../components/Description'
    import ButtonComponent from '../components/ButtonComponent'
    import InputComponent from '../components/InputComponent'
    export default {
        name: "Callback",
        props: {
            description: Object,
            form: Object,
        },
        components: {
            Description,
            ButtonComponent,
            InputComponent,
        },
        methods: {
            handleScroll: function (evt, el) {
                console.log(window.scrollY)
                if (window.scrollY > 3190) {
                    el.setAttribute(
                        'style',
                        'animation: showUp 1s forwards;'
                    )
                }
                //1290
                //2290
                //2620
                //3190
                //
                return window.scrollY > 100
            },
        }
    }
</script>

<style lang="scss">
    @keyframes showUp {
        from {
            opacity: 0;
            transform: translate3d(0, 100px, 0);
        }

        to {
            opacity: 1;
            transform: translate3d(0, 0px, 0);
        }
    }

    #App-callback {
        background: #F7F7FE;

        display: grid;
        grid-template-columns: 100px repeat(8, 1fr) 100px;
        grid-template-rows: 75px repeat(2, 1fr) 75px;
        grid-row-gap: 25px;

        #desc-callback {
            grid-column: 2 / span 4;
            grid-row: 2;

            align-self: flex-start;
        }

        #bg {
            grid-column: 6 / span 2;
            grid-row: 2 / span 3;

            width: 270px;
            height: 228px;
        }

        #form-callback {
            grid-column: 2 / span 4;
            grid-row: 3;

            align-self: flex-end;

            display: grid;
            grid-template-columns: 60% 40%;
            grid-template-rows: 1fr 25px;

            input {
                width: 235px;
            }

            #button-callback {
                margin-left: 25px;

                width: 144px;
                height: 42px;

                justify-self: center;
                align-self: center;
            }

            #form-agreement {
                font-size: 10px;
                font-family: Axiforma-Regular;
                color: #243141;

                a {
                    color:#359CFF;
                    /*font-weight: 600;*/
                    text-decoration: none;
                    border-bottom: 1px solid gray;
                }

                &::before {
                    display: block;
                    float: left;
                    margin-right: 5px;
                    content: '';
                    width:14px;
                    height:14px;
                    background: url("../assets/check-list.svg") 4px/6px no-repeat  rgba(36,49,65, 0.4);
                    /*background-image: ;*/
                }
            }
        }
    }
</style>