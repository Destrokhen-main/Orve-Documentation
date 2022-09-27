import Title from "../comp/title";
import SubTitle from "../comp/subTitle";
import Code from "../comp/code";

const start = () => {
  return {
    tag: "div",
    props: {
      id: "start",
      style: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: "0 10px",
        paddingBottom: "10px",
        borderBottomLeftRadius: "5px",
        borderBottomRightRadius: "5px"
      }
    },
    child: [
      {
        tag: Title,
        props: {
          title: "Начало работы"
        }
      },
      "Чтобы запустить проект. Сначала выполните команду",
      {
        tag: Code,
        props: {
          code: "npm install"
        },
      },
      "После, вы сможете либо собрать проект, либо запустить его в тестовом режиме",
      
      
      {
        tag: SubTitle,
        props: {
          title: "Сборка проекта",
        }
      },
      "Для того, чтобы собрать проект, используйте:",
      {
        tag: Code,
        props: {
          code: "npm run build"
        },
      },
      {
        tag: "div",
        child: [
          "После сборки проекта, всё файлы будут лежать в папке ",
          {
            tag: "b",
            child: [
              "dist"
            ]
          }
        ],
      },
      {
        tag: SubTitle,
        props: {
          title: "Запуск проекта в режиме разработчика",
        }
      },
      "Чтобы запустить проект в режиме Developer:",
      {
        tag: Code,
        props: {
          code: "npm run dev",
        }
      },
      "В консоле будет написан порт, по которому можно будет подключиться к сайту (Стандартный 8080)",
    ]
  }
}

export default start;