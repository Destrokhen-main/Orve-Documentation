import subTitle from "../../helper/subTitle";
import TitleText from "../../helper/TitleText";
import Code from "../../helper/Code";

import Layer from "../../helper/LayerBody"

export default function () {
  return {
    tag: Layer,
    child: [
      {
        tag: subTitle,
        child: "Router"
      },
      `<p>
        В одной из статей выше, я рассказывал вам про Router.<br />
        Изначально мне казалось, что документации на GitHub хватит для понимания, как с ней работать.<br />
        Но оказалось, что пришлось добавить несколько фичей, про которые вам будет полезно знать.
      </p>`,
      {
        tag: TitleText,
        child: "Установка"
      },
      `<p>
        На данный момент, router плагина нет на npm. Он будет добавлен чуть позже. Пока зависимость нужно указывать в package,
      </p>`,
      {
        tag: Code,
        child: '"sreact-router": "https://github.com/Destrokhen-main/Simple-Reactive-router.git"'
      },
      `<p>
        Как вы видите, название отличается, это на самом деле старое название всей библиотеки. Изначально она называла sreact)<br/>
        В будущем название будет "orve-router"
        <br/>
        <br/>
        После того, как вы прописали эту зависимость и выполнили установку ( npm i ), Можете начинать настраивать router
      </p>`,
      {
        tag: TitleText,
        child: "Настройка router"
      },
      `<p>
        Для начала вам надо создать какой-то файл в котором будет описан ваш router.
      </p>`,
      {
        tag: Code,
        child: `
        const router = [];
        `
      },
      `<p>
        Router должен храниться как массив объектов. Как заполнять массив? На самом деле всё просто.
      </p>`,
      {
        tag: Code,
        child: `
        {
          path : string (ex: "/")
          component: function() {},
          meta: {} object с настройками,
          redirect: String тут указывается другой path
        }
        `
      },
      `<p>
        Тут вроде всё понятно)<br/>
        Теперь нужно создать роутер и подключить его к проекту.<br/>
        Для того, чтобы создать объект router вам нужно импортировать createRouter из sreact-router
      </p>`,
      {
        tag: Code,
        child: `
          import { createRouter } from "sreact-router"

          const router = [
            {
              path: "/",
              component: SomeComponent
            },
            {
              path: "/blog",
              component: SomeComponentBlog
            },
          ];

          const r = createRouter(router)
        ` 
      },
      `<p>
        Отлично! Объект router создан, теперь нужно подключить его к проекту.
        <br/>
        <br/>
        Чтобы подключить, нужно зайти в index.js файл и подключить router
      </p>`,
      {
        tag: Code,
        child: `
          **index.js**
          import router from "./router"

          const app = createApp({router, App });
        `
      },
      `<p>
        Всё, теперь router Подключён
      </p>`,
      {
        tag: TitleText,
        child: "Мод для router"
      },
      `<p>
        Мод для вашего router это очень важный пункт. Например, посмотрите на адресную строку сейчас. Видите, у вас ссылка содержит "#". <br/>
        Это мод для router. Называется HashHistory. Его иногда лучше использовать, например если сервер, тяжело определяет, на какой вы странице находитесь.
        <br/>
        <br/>
        Как настраивать мод? Если вы хотите использовать обычный мод (domain.com/home)<br />
        В этом случаи, ничего делать не надо, по умолчанию такой мод и так стоит.
        <br/>
        <br/>
        Ну что сделать, если вам этот мод не помогает. На самом деле всё просто.<br/>
        Укажите мод в createRouter
      </p>`,
      {
        tag: Code,
        child: `
        const r = createRouter(router, "hash")
        `
      },
      `<p>
        Теперь, в url будет указываться "#" пример (domain.com/#/home).
      </p>`,
      {
        tag: TitleText,
        child: "Расположение компонента Router"
      },
      `<p>
        Теперь, вам нужно в проекте указать router, в нем будут рендериться ваши страницы.<br/>
        Чтобы это сделать, вам нужно импортировать RouterLink c sreact-router.
      </p>`,
      {
        tag: Code,
        child: `
        import { RouterLink } from "sreact-router";

        export default function () {
          return {
            tag: "div",
            child: [
              ...,
              RouterLink
            ]
          }
        }`
      },
      `<p>
        Отлично, всё готово, теперь страницы с вашего массива router будут отображаться.
      </p>`,
      {
        tag: TitleText,
        child: "Как совершать переход"
      },
      `<p>
        Чтобы совершить переход, у вас есть 2 варианта. PUSH и REPLACE. Эти функции лежат в объекте $router.
      </p>`,
      {
        tag: Code,
        child: `
        export default function() {
          return {
            tag: "div",
            props: {
              "@click" : () => {
                this.$router.push(path ("/home"))
                или
                this.$router.replace(path ("/home"))
              }
            },
            child: "LINK"
          }
        }`
      },
      `<p>
        Переходы делать научились, размещать router, тоже. Но было бы круто, знать, когда был совершён переход, например чтобы обновить title.<br/>
        Для таких целей существует beforeRouter, В неё нужно передать callback.<br/>
        Она лежит в "sreact-router"
      </p>`,
      {
        tag: Code,
        child: `
        import { beforeRouter } from "sreact-router"

        beforeRouter((from, to) => {
            ...
        })`
      },
      `<p>
        Где разместить такую функцию. На самом деле, будет хорошо, если вы сделаете это перед создание router.
      </p>`,
      {
        tag: Code,
        child: `
        import { beforeRouter } from "sreact-router"

        beforeRouter((_, to) => {
            if (to.meta !== undefined)
            document.title = to.meta.title;
        });
        
        const object = createRouter(router, "hash");`
      },
      `<p>
        Отлично! Теперь вы знаете, что делать с router
      </p>`

    ]
  }
}