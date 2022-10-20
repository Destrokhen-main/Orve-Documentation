import { ref } from "sreact";

export default function() {
  const attribute = ref(0);
  return {
    tag: "div",
    child: [
      {
        tag: "p",
        props: {
          id: attribute,
          "@click" : () => {
            attribute.value += 1;
          }
        },
        child: [
          "Ты нажал сюда ",
          attribute,
          " раз"
        ]
      }
    ]
  }
}