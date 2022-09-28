import { refC } from "sreact"

const comp1 = () => {
  return {
    tag: "div",
    child: [
      "Component-1",
      "<br />",
      {
        tag: "input",
      }
    ]
  }
}

const comp2 = () => {
  return {
    tag: "div",
    child: [
      "Component-2",
      "<br />",
      {
        tag: "button",
        child: ["button comp-2"]
      }
    ]
  }
}

export default () => {
  const component = refC(comp1);
  let selected = 1;
  return {
    tag: "div",
    child: [
      component,
      {
        tag: "button",
        props: {
          "@click" : () => {
            selected = selected === 1 ? 2 : 1;
            component.value = selected === 2 ? comp2 : comp1;
          }
        },
        child: ["Переключить"]
      }
    ]
  }
}