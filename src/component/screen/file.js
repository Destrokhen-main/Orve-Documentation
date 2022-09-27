import Title from "../comp/title";
import SubTitle from "../comp/subTitle";
import Code from "../comp/code";

import layer from "../../layout/layerBlock";

export default () => {
  return {
    tag: layer,
    props: {
      id: "file",
    },
    child: [
      {
        tag: Title,
        props: {
          title: "Файловая система"
        }
      },
      "Все необходимые файлы находяться в папке src",
      {
        tag: SubTitle,
        props: {
          title: "index.js"
        }
      },
      "createApp - Поможет вам создать ваше приложение",
      "Для того, чтобы собрать дерево приложения, используйте:",
      {
        tag: Code,
        props: {
          code: "const app = createApp(App);"
        }
      },
      {
        tag: "div",
        child: [
          "Данная функция вернёт вам объект в котором есть метод ",
          {
            tag: "b",
            child: ["mount"]
          }
        ]
      },
      {
        tag: SubTitle,
        props: {
          title: "mount"
        }
      },
      {
        tag: "code",
        child: [
          `app.mount(querySelector div);`
        ]
      },
      "Внутри функции передаётся id блока в котором будет отрисовываться ваш код (пример #app)",
      {
        tag: SubTitle,
        props: {
          title: "App.js"
        }
      },
      "Здесь находиться код главного компонента. Начинайте работу отсюда",
      
    ]
  }
}