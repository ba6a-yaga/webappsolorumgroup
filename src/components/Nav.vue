<template>
    <nav class="App-nav">
        <ul class="menu">
            <li v-for="(v,i) in menu" :key="i">
                <a v-if="!v.subMenu"
                   :src="v.src"
                   class="menu-element active"
                   v-html="v.title"
                   target="_blank">
                </a>
                <a v-else
                   class="menu-element inactive"
                   v-html="v.title"
                   target="_blank">
                </a>
                <ul v-if="v.subMenu" class="submenu">
                    <li v-for="(s,i) in v.subMenu"
                        :key="i"
                        class="submenu-element"
                        :style="{'--content-v':''.concat('\'0',(i+1),'\'')}">
                        <a
                                target="_blank"
                                :src="s.src"
                                v-html="s.title"
                                class="active">
                        </a>
                    </li>
                </ul>
            </li>
            <ul class="contacts">
                <li v-for="(v,i) in contacts" :key="i">
                    <a v-html="v" class="active" target="_blank"></a>
                </li>
            </ul>
            <div class="link">
                <a class="download" target="_blank" :src="download.link">{{download.title}}</a>
            </div>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "Nav",
        props: {
            menu: Array,
            contacts: Array,
            download: Object,
        },
    }
</script>

<style lang="scss">
    .App-nav {
        position: fixed;
        right: 0px;
        width: 350px;
        height: 100%;
        background: #FFFFFF;


        ul li {
            list-style-type: none;
        }

        a {
            font-size: 13px;
            font-family: Axiforma-Medium;
            color: #3F597E;
        }

        .active {
            &:hover {
                color:#359CFF;
            }
        }

        .inactive {
            cursor: default;
        }

        .menu {
            top: 10%;
            position: absolute;
            display: grid;
            grid-gap: 15px;

            .submenu {
                display: grid;
                grid-template-columns: 18px 1fr;
                grid-gap: 15px;

                margin-top: 15px;
                padding-left: 0px;

                .submenu-element {
                    display: contents;
                    grid-column: 2;

                    &::before {
                        grid-column: 1;
                        font-family: Axiforma-Regular;
                        font-size: 13px;
                        content: var(--content-v);
                        color: #798599;
                    }
                }

            }

            .contacts {
                padding-left: 0px;

                a {
                    font-family: Axiforma-Regular;
                    font-size: 13px;
                    color: #798599;
                }
            }

            .link {
                display: grid;
                grid-template-columns: 20px 1fr;
                grid-gap: 15px;

                .download {
                    display: contents;
                    color:#359CFF;
                    font-family: Axiforma-Regular;
                    font-size: 13px;
                    grid-column: 2;

                    &::before {
                        align-self: center;
                        grid-column: 1;
                        content: '';
                        display: block;
                        width: 14px;
                        height: 18px;
                        background: #359CFF;
                        mask: url("../assets/download.svg")
                    }
                }
            }
        }
    }

</style>