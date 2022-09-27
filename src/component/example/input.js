import { ref } from "../../../core";
export default () => {
  const value = ref("asd")
  return {
    tag: "div",
    props: {
      style: {
        margin: "10px 0"
      }
    },
    child: [
      {
        tag: "p",
        child: [
          "text: ",
          value
        ]
      },
      {
        tag: "input",
        props: {
          placeholder: "placeholder",
          "@input": (e) => {
            value.value = e.target.value;
          },
          value: value,
        }
      }
    ]
  }
}