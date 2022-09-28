import Title from "./comp/title";

import link from "../component/comp/link";

const ar = [
  {
    title: "Запуск",
    id: "#start"
  },
  {
    title: "Файловая система",
    id: "#file"
  },
  {
    title: "Компоненты",
    id: "#component"
  },
  {
    title: "Реактивность",
    id: "#reactive"
  },
  {
    title: "Watch",
    id: "#watch"
  },
  {
    title: "Реактивные компоненты",
    id: "#reactComp"
  }
]

const menu = ar.map(i => {
  return {
    tag: link,
    props: {
      title: i.title,
      id: i.id
    }
  }
});


const sidebar = (props) => {
  return {
    tag: "div",
    props: {
      class: "side-bar",
    },
    child: [
      {
        tag: Title,
        props: {
          title: "Меню",
        }
      },
      ar.map(i => {
          return {
            tag: "div",
            props: {
              "@click" : function() {
                props.call(i);
              }
            },
            child: [
              {
                tag: link,
                props: {
                  title: i.title,
                  id: i.id
                }
              }
            ]
          }
      }),
    ]
  }
}

export default sidebar;