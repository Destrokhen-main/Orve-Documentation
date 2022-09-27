import Title from "../comp/title";
import code from "../comp/code";
import layer from "../../layout/layerBlock";

import example from "../example/reactiveComp";

export default () => {
  return {
    tag: layer,
    child: [
      {
        tag: Title,
        props: {
          title: "Реактивные компоненты"
        }
      },
      {
        tag: "div",
        child: [
          "Если вам нужно использовать реактивный компонент, подключите к вашему коду",
          {
            tag: "b",
            child: [
              "refC"
            ]
          }
        ]
      },
      "Пример:",
      {
        tag: "pre",
        child: [
`import { refC } from "core"

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
}`
        ]
      },
      example
    ]
  }
}