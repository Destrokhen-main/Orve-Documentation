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

export default menu;