import Title from "../comp/title";
import component from "../example/component";
import ComponentCallback from "../example/componentCallback";

import layer from "../../layout/layerBlock";

export default () => {
  return {
    tag: layer,
    props: {
      id: "component"
    },
    child: [
      {
        tag: Title,
        props: {
          title: "Компонент"
        }
      },
      "Для того, чтобы создать компонент, вам нужно создать функцию, которая вернёт какой-то объект",
      {
        tag: "div",
        props: {
          style: {
            margin: "10px 0 "
          }
        },
        child: ["Пример:"]
      },
      {
        tag: "pre",
        child: [
          `const comp = () => {
  return {
    tag: htmlTag,
    child: [],
    props: {}
  }
}
export default comp;`
        ],
      },
      "Если вы используете один компонент внутри другого, вы можете, отправить ему props и child",
      "<br/>",
      "Чтобы использовать его, просто указите его в поле tag",
      {
        tag: "p",
        child: ["Пример:"]
      },
      {
        tag: "pre",
        child: [
`const Component = (props) => {
  return {
    tag: "div",
    props: {
      id: props.id,
    },
    child: [
      ...props.children
    ]
  }
}

export default main = () => {
  return {
    tag: "div",
    child: [
      {
        tag: Component,
        props: {
          id: "test",
        },
        child: [
          {
            tag: "p",
            child: [
              "какой-то текст"
            ]
          }
        ]
      }
    ]
  }
}
`
        ]
      },
      "Результат:",
      component,
      "<hr />",
      "Так же вы можете передавать callback или что-то такое, например. (Дальше будет использован ref, посмотрите Соответствующий раздел (реактивность))",
      {
        tag: "pre",
        child: [
`import { ref } from "core";

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
`
        ]
      },
      "Результат:",
      ComponentCallback
    ]
  }
}