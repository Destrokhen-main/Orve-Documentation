import { ref } from "orve";

export default function() {
  const r = ref("");
  return {
    tag: "div",
    child: [
      {
        tag: "p",
        child: r
      },
      {
        tag: "input",
        props: {
          "@input": (e) => {
            r.value = e.target.value;
          },
          placeholder: "Введите что-то"
        }
      }
    ]
  }
}