import subTitle from "../../helper/subTitle";
import TitleText from "../../helper/TitleText";
import Code from "../../helper/Code";

export default () => {
  return {
    tag: "div",
    props: {
      style: {
        flexGrow: 1
      }
    },
    child: [
      {
        tag: subTitle,
        child: [
          "Структура Webpack проекта"
        ]
      },
      {
        tag: "p",
        child: [
          "Как вы уже поняли. проект использует технологии webpack"
        ]
      },
      {
        tag: "p",
        child: [
          "Скачать проект вы можете по этой ",
          {
            tag: "a",
            props: {
              href: "https://github.com/Destrokhen-main/Simple-Reactive-npm-project",
              target: "_blank"
            },
            child: [
              "ссылке"
            ]
          },
          ". И этот сайт был написан с помощью данной сборки."
        ]
      },
      "<br />","<br />",
      {
        tag: TitleText,
        child: [
          "Почему именно она?"
        ]
      },
      {
        tag: "p",
        child: [
          "С помощью этой сборки вы можете использовать больше возможностей для создания вашего продукта"
        ]
      },
      "<br />",
      {
        tag: "p",
        child: [
          "Например, сборка даст вам возможность открывать live server, использовать scoped style и много мелких, но приятных деталей, которые вы сможете найти, пока будете изучать структуру проекта."
        ]
      },
      {
        tag: TitleText,
        child: [
          "Команды npm проекта"
        ]
      },
      {
        tag: "p",
        child: [
          "Чтобы запустить проект в режиме разработки, пропишите вот эту команду в консоле."
        ]
      },
      {
        tag: Code,
        child: [
          `npm run dev`
        ]
      },
      {
        tag: "p",
        child: [
          "Этот проект запуститься по адресу localhost:8080. В терминале будут ссылки, можете нажать на них и открыть в браузере."
        ]
      },
      {
        tag: "p",
        child: [
          "В данном режиме, проект будет автоматически обновляться, после ваших изменений."
        ]
      },
      "<br />","<br />",
      {
        tag: "p",
        child: [
          "Чтобы собрать проект, вам нужно ввести вот эту команду."
        ]
      },
      {
        tag: Code,
        child: [
          `npm run build`
        ]
      },
      {
        tag: "p",
        child: [
          "После, в папке dist будет ваш проект. Вы сможете положить его на ваш сервер. Файлы в проекте будут в минимизированы, чтобы меньше весить."
        ]
      },
      {
        tag: TitleText,
        child: [
          "Файловая система"
        ]
      },
      {
        tag: Code,
        child: [
          `
        public
        ├─favicon.ico
        ├─index.html
        └─robots.txt
        src
        ├─index.js
        └─app.js
          `
        ]
      },
      {
        tag: "p",
        child: [
          "В public храниться иконка которая будет отображаться в закладке, index.html в котором будет храниться итоговый вариант проекта."
        ]
      },
      {
        tag: "p",
        child: [
          "index.js главный файл, в нём создается дерево для проекта и присуствует команда для внедрение его в index.html"
        ]
      },
      {
        tag: "p",
        props: {
          style: {
            fontStyle: "italic"
          }
        },
        child: [
          "Пожалуйста не переименовывайте index.js файл, иначе придётся менять настройку webpack"
        ]
      }
    ]
  }
}