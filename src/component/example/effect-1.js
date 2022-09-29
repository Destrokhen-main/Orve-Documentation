import { ref, effect } from "sreact";

export default () => {
  const input = ref("");
  return {
    tag: "div",
    child: [
      {
        tag: "p",
        child: [
          effect(() => {
            const value = input.value;
            if (value.length > 10)
              return "Больше 10"
            else if (value.length === 0)
              return "Равно нулю"
            else
              return "Что-то"
          }, [input])
        ]
      },
      {
        tag: "input",
        props: {
          "@input": (e) => {
            input.value = e.target.value;
          },
          placeholder: "Введи что-то"
        }
      }
    ]
  }
}