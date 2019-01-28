<template>
    <div id="App-main">
        <Nav
                :download="this.data.navigation.download"
                :menu="this.data.navigation.menu"
                :contacts="this.data.navigation.contacts"
        />
        <Header
                :logo=this.data.logo
                :title=this.data.title
                :list=this.data.list />
        <Solutions
                v-scroll="handleAppSolutions"
                :title="this.data.solutions.description.title"
                :desc="this.data.solutions.description.desc"
                :blocks="this.data.solutions.blocks" />
        <Poll
                v-scroll="handleAppPoll"
                :description="this.data.poll.description"
                :questions="this.data.poll.questions" />
        <Partners
                :description="this.data.partners.description"
                :icons="this.data.partners.icons" />
        <Features
                v-scroll="handleAppFeatures"
                :description="this.data.features.description"
                :list="this.data.features.list" />
        <Callback
                :description="this.data.callback.description"
                :form="this.data.callback.form" />
        <Footer
                :descsription="this.data.footer.desc"
                :policy="this.data.footer.policy"/>
    </div>
</template>

<script>
    import Header from './containers/Header'
    import Solutions from './containers/Solutions'
    import Poll from './containers/Poll'
    import Partners from './containers/Partners'
    import Features from './containers/Features'
    import Callback from './containers/Callback'
    import Footer from './containers/Footer'
    import Nav from './components/Nav'
    import Img1 from './assets/bg@2x.png'
    import Round from './assets/round.svg'
    import LogoPartners from './assets/logo-partners.svg'

    export default {
        name: 'solorumgroup',
        data() {
          return {
              data: {
                  title: 'Создаем digital-сервисы <br />для ',
                  list:[
                      {
                          img: {
                              src: Img1
                          },
                          text: {
                              more: 'Малому бизнесу',
                              title: 'Все самое нужное и полезное',
                              desc: 'В проектах выступаем партнерами - мы не<br /> просто исполнители.'
                          },
                          isButton: true,
                      },
                      {
                          img: {
                              src: Img1
                          },
                          text: {
                              more: 'Малому и не только бизнесу',
                              title: 'Скорость разработки и качественное исполнение',
                              desc: 'Скорость, Качество, Не дорого - выбирай любые два и это не про нас, мы рвем шаблоны ;)'
                          },
                          isButton: true,
                      }
                  ],
                  navigation:{
                      menu:[
                          {title:"Главная",src:""},
                          {title:"Услуги", subMenu:[
                                  {title:"Стартегия и аналитика",src:""},
                                  {title:"Дизайн",src:""},
                                  {title:"Разработка и поддержка",src:""},
                                  {title:"Юридическое и финансовое <br />сопровождение",src:""},
                                  {title:"Видео",src:""},
                                  {title:"Интернет-реклама",src:""},
                                  {title:"Организация мероприятий",src:""},
                          ]},
                          {title:"Контакты",src:""}
                      ],
                      contacts:[
                          "+7 (495) 201-45-72",
                          "info@solorum.ru"
                      ],
                      download: {
                          title: "Скачать презентацию",
                          link: ""
                      }
                  },
                  solutions: {
                      description: {
                          title: 'Все самое нужное и полезное для<br /> вашего бизнеса в одном месте',
                          desc: 'В проектах выступаем партнерами — мы не просто исполнители. Когда оцениваем задачу, то изучаем цели и особенности компании, чтобы предложить наиболее продуктивное решения. '
                      },
                      blocks: [
                          {
                              title:'Стратегия<br /> и аналитика',
                              desc:'Помогаем компаниям<br /> найти своего клиента',
                          },
                          {
                              title:'Стратегия<br /> и аналитика',
                              desc:'Помогаем компаниям<br /> найти своего клиента',
                          },
                          {
                              title:'Стратегия<br /> и аналитика',
                              desc:'Помогаем компаниям<br /> найти своего клиента',
                          },
                          {
                              title:'Стратегия<br /> и аналитика',
                              desc:'Помогаем компаниям<br /> найти своего клиента',
                          },
                          {
                              title:'Стратегия<br /> и аналитика',
                              desc:'Помогаем компаниям<br /> найти своего клиента',
                          },
                          {
                              title:'Стратегия<br /> и аналитика',
                              desc:'Помогаем компаниям<br /> найти своего клиента',
                          },
                          {
                              title:'Стратегия<br /> и аналитика',
                              desc:'Помогаем компаниям<br /> найти своего клиента',
                          },
                          {
                              title:'Стратегия<br /> и аналитика',
                              desc:'Помогаем компаниям<br /> найти своего клиента',
                          },
                          {
                              title:'Стратегия<br /> и аналитика',
                              desc:'Помогаем компаниям<br /> найти своего клиента',
                          },
                      ]
                  },
                  poll: {
                      description: {
                          title:'Разбираемся в задаче с точной проработкой сметы и плана работ',
                      },
                      questions: [
                          {
                              title:'1. Фиксируем бюджет',
                              icons:[Round],
                              desc:'Погружаемся в проект и досконально изучаем сложность задачи, чтобы точно рассчитать смету, без пересчетов в будущем. Продуманный план работ — наша гарантия сроков',
                          },
                          {
                              title:'2. Сдаем проект в срок',
                              icons:[Round,Round],
                              desc:'Сначала проводим глубокое обследование проекта и внимательно изучаем специфику деятельности, чтобы составить точный план и график работ для всего проекта. Мы дорожим репутацией.',
                          },
                          {
                              title:'3. Делаем профессионально',
                              icons:[Round],
                              desc:'За весь процесс отвечает руководитель проекта — он единое контактное лицо по всем вопросам. В решении задачи участвуют профильные специалисты. ',
                          },
                      ],
                  },
                  partners: {
                      description: {
                          title:'Наши партнеры',
                          desc:'В проектах выступаем партнерами — мы не просто исполнители. Когда оцениваем задачу, то изучаем цели и ',
                      },
                      icons: [
                          {
                              img: {
                                  src: LogoPartners
                              },
                              isButton: false,
                          },
                          {
                              img: {
                                  src: LogoPartners
                              },
                              isButton: false,
                          },
                          {
                              img: {
                                  src: LogoPartners
                              },
                              isButton: false,
                          },
                          {
                              img: {
                                  src: LogoPartners
                              },
                              isButton: false,
                          },
                          {
                              img: {
                                  src: LogoPartners
                              },
                              isButton: false,
                          },
                          {
                              img: {
                                  src: LogoPartners
                              },
                              isButton: false,
                          },
                          {
                              img: {
                                  src: LogoPartners
                              },
                              isButton: false,
                          },
                          {
                              img: {
                                  src: LogoPartners
                              },
                              isButton: false,
                          },
                      ]
                  },
                  features:{
                      description: {
                          title: 'Почему мы?',
                          desc: 'В проектах выступаем партнерами — мы не просто исполнители. Когда оцениваем задачу, то изучаем цели и особенности компании, чтобы предложить наиболее продуктивное решения.',
                      },
                      list: [
                          {
                              icon: Round,
                              title: 'Качество 1',
                              desc: 'В проектах выступаем партнерами — мы не просто исполнители. Когда оцениваем задачу, то изучаем цели и ',
                          },
                          {
                              icon: Round,
                              title: 'Качество 2',
                              desc: 'В проектах выступаем партнерами — мы не просто исполнители. Когда оцениваем задачу, то изучаем цели и ',
                          },
                          {
                              icon: Round,
                              title: 'Качество 3',
                              desc: 'В проектах выступаем партнерами — мы не просто исполнители. Когда оцениваем задачу, то изучаем цели и ',
                          },
                      ],
                  },
                  callback: {
                      description: {
                          title: 'Думаете кому доверить задачу?',
                          desc: 'Для связи с нами достаточно оставить <br />свой телефон — мы отреагируем быстро',
                      },
                      form: {
                          title: 'Телефон для связи',
                          btn: {
                              title: 'Перезвонить',
                          },
                          agreement: 'Соглашаюсь на <a class="link-agreement">обработку персональных данных</a>',
                          bgdImage:'',
                      }
                  },
                  footer: {
                      desc: '©2018г. Группа компаний Solorum Group.<br />Все права защищены.',
                      policy: 'Политика конфиденциальности',
                  },
              },
          }
        },
        components: {
            Partners,
            Header,
            Nav,
            Solutions,
            Poll,
            Features,
            Callback,
            Footer,
        },
        methods: {
            handleAppSolutions: function (evt, el) {
                if (window.scrollY > 50) {
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
            handleAppPoll: function(evt, el) {
                if (window.scrollY > 1290) {
                    el.setAttribute(
                        'style',
                        'animation: showUp 1s forwards;'
                    )
                }
            },
            handleAppFeatures: function(evt, el) {
                if (window.scrollY > 2620) {
                    el.setAttribute(
                        'style',
                        'animation: showUp 1s forwards;'
                    )
                }
            },
        },
    }
</script>

<style>

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

    body {
        margin: 0;
        padding: 0;
        color: #243141;
        font-family: Axiforma-Medium, Axiforma-ExtraBold, Axiforma-Bold;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        cursor: pointer;
    }

    @font-face {
        font-family: Axiforma-ExtraBold;
        font-style: normal;
        font-weight: normal;
        src:
                url('./assets/fonts/woff/Kastelov - Axiforma ExtraBold.woff') format('woff'),
                url('./assets/fonts/otf/Kastelov - Axiforma ExtraBold.otf') format('otf')
    }

    @font-face {
        font-family: Axiforma-Bold;
        font-style: normal;
        font-weight: normal;
        src:
                url('./assets/fonts/woff/Kastelov - Axiforma Bold.woff') format('woff'),
                url('./assets/fonts/otf/Kastelov - Axiforma Bold.otf') format('otf')
    }

    @font-face {
        font-family: Axiforma-Medium;
        font-style: normal;
        font-weight: normal;
        src:
                url('./assets/fonts/woff/Kastelov - Axiforma Medium.woff') format('woff'),
                url('./assets/fonts/otf/Kastelov - Axiforma Medium.otf') format('otf')
    }

    @font-face {
        font-family: Axiforma-Regular;
        font-style: normal;
        font-weight: normal;
        src:
                url('./assets/fonts/woff/Kastelov - Axiforma Regular.woff') format('woff'),
                url('./assets/fonts/otf/Kastelov - Axiforma Regular.otf') format('otf')
    }

    @font-face {
        font-family: Axiforma-Thin;
        font-style: normal;
        font-weight: normal;
        src:
                url('./assets/fonts/woff/Kastelov - Axiforma Thin.woff') format('woff'),
                url('./assets/fonts/otf/Kastelov - Axiforma Thin.otf') format('otf')
    }

    @font-face {
        font-family: Axiforma-SemiBold;
        font-style: normal;
        font-weight: normal;
        src:
                url('./assets/fonts/woff/Kastelov - Axiforma SemiBold.woff') format('woff'),
                url('./assets/fonts/otf/Kastelov - Axiforma SemiBold.otf') format('otf')
    }
</style>