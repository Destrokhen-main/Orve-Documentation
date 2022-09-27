import Title from "../comp/title";

import watch from "../example/watch"

export default () => {
  return {
    tag: "div",
    props: {
      id: "watch",
      style: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: "0 10px",
        paddingBottom: "10px",
        borderRadius: "5px",
      }
    },
    child: [
      {
        tag: Title,
        props: {
          title: "watch"
        }
      },
      "Вы можете использовать функцию watch для того, чтобы следить за каким-то ref объектом",
      {
        tag: "code",
        child: [
          "watch(callback, ref)"
        ]
      },
      "Пример:",
      {
        tag: "pre",
        child: [
`import { ref, watch } from "core";

export default () => {
  const check = ref("нет");
  const count = ref(1);
  
  watch(() => {
    if (count.value >= 5)
      check.value = "да";
  }, count)

  return {
    tag: "div",
    child: [
      {
        tag: "p",
        child: [
          "Нажал больше 5 : ",
          check,
        ]
      },
      {
        tag: "button",
        props: {
          "@click": () => {
            count.value += 1;
          },
          style: {
            margin: "10px 0"
          }
        },
        child: [
          "Вы нажали сюда ( ",
          count,
          " раз )"
        ]
      }
    ]
  }
}`
        ]
      },
      "Полуаем",
      watch
    ]
  }
}