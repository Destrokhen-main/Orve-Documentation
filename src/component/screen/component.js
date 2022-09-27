import Title from "../comp/title";

export default () => {
  return {
    tag: "div",
    props: {
      style: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: "0 10px",
        paddingBottom: "10px",
        borderBottomLeftRadius: "5px",
        borderBottomRightRadius: "5px"
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