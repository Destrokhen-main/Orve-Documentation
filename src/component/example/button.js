import { ref } from "../../../core"

export default () => {
  const click = ref (0);

  return {
    tag: "div",
    child: [
      {
        tag: "button",
        props: {
          "@click" : () => {
            click.value += 1;
          },
          style: {
            margin: "10px 0"
          }
        },
        child: [
          "Ты нажал сюда ( ",
          click,
          " раз )"
        ]
      }
    ]
  }
}