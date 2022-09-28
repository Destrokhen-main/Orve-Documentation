import { ref } from "sreact";

const comp = (props) => {
  return {
    tag: "button",
    props: {
      "@click" : () => {
        props.call("fff")
      } 
    },
    child: [
      "click"
    ]
  }
}

export default () => {
  const v = ref(1);
  const text = ref("")

  const callback = (t) => {
    v.value += 1;
    text.value = t;
  }

  return {
    tag: "div",
    child: [
      {
        tag: "p",
        child: [
          v,
          " ",
          text
        ]
      },
      {
        tag: comp,
        props: {
          call: callback,
        }
      }
    ]
  }
}