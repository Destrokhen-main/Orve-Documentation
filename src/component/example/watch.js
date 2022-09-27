import { ref, watch } from "../../../core";

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
}