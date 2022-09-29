import { ref, effect } from "sreact"

export default () => {
  const r = ref(1)
  return {
    tag: "button",
    props: {
      "@click": () => {
        r.value += 1;
      }
    },
    child: [
      effect(() => "Ты нажал сюда " + r.value + " раз", [r])
    ]
  }
}