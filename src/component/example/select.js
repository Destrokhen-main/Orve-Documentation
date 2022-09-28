import { ref } from "../../../core";

export default () => {
  const value = ref("")

  return {
    tag: "div",
    child: [
      {
        tag: "p",
        child: [
          "Выбран: ",
          value
        ]
      },
      {
        tag: "select",
        props: {
          "@change": (e) => {
            value.value = e.target.value
          }
        },
        child: [
          new Array(10).fill().map((i, n) => ({
            tag: "option",
            props: {
              value: "v-" + n
            },
            child: [
              "value-" + n
            ]
          }))
        ]
      }
    ]
  }
}