import Title from "../comp/title";

export default () => {
  return {
    tag: "div",
    props: {
      style: {
        marginTop: "50px",
        display: "flex",
        flexDirection: "column"
      },
      id: "component"
    },
    child: [
      {
        tag: Title,
        props: {
          title: "Компонент"
        }
      },
      "Для того, чтобы создать компонент, вам нужно создать функцию, которая вернёт какой-то объект",
      {
        tag: "div",
        props: {
          style: {
            margin: "10px 0 "
          }
        },
        child: ["Пример:"]
      },
      {
        tag: "pre",
        child: [
          `const comp = () => {
  return {
    tag: htmlTag,
    child: [],
    props: {}
  }
}
export default comp;`
        ],
      }
    ]
  }
}