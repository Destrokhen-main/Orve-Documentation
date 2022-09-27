import Title from "../comp/title";
import code from "../comp/code";

import input from "../example/input";
import button from "../example/button";

import layer from "../../layout/layerBlock";
export default () => {
  return {
    tag: layer,
    props: {
      id: "reactive",
    },
    child: [
      {
        tag: Title,
        props: {
          title: "Реактивность"
        }
      },
      {
        tag: "div",
        child: [
          "Чтобы сделать какую-то пременную реактивной, нужно использовать функцию ",
          {
            tag: "b",
            child: [
              "ref"
            ]
          }
        ]
      },
      "Функция находиться в core",
      {
        tag: code,
        props: {
          code: "import { ref } from 'core'"
        }
      },
      {
        tag: "span",
        child: [
          "Использоваение"
        ]
      },
      "Вы можете создать переменные типа",
      {
        tag: "b",
        child: [
          "string, number, boolean"
        ]
      },
      "Пример:",
      {
        tag: code,
        props: {
          code: "const r = ref(1)"
        }
      },
      "Теперь вы можете использовать данную переменную в объектах",
      {
        tag: "pre",
        child: [
          `const app = () => {
  const r = ref(1);
  return {
    tag: "div",
    props: {
      id: r,
    },
    child: [
      r
    ]
  }
}`,
        ]
      },
      "К примеру, такой код",
      {
        tag: "pre",
        child: [
`import { ref } from "core";

export default () => {
  const value = ref("asd")
  return {
    tag: "div",
    child: [
      {
        tag: "p",
        child: [
          "text : ",
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
`
        ]
      },
      "В итоге получим вот это:",
      input,
      {
        tag: "span",
        props: {
          style: {
            fontFamily: "font",
            fontStyle: "italic",
          }
        },
        child: [
          "Весь код с таких примеров есть в папке example"
        ]
      },
      {
        tag: "p",
        props: {
          style: "margin: 10px 0",
        },
        child: [ "Так же можно сделать и с кнопкой" ]
      },
      {
        tag: "pre",
        child: [
`import { ref } from "core"

export default () => {
  const click = ref (0);

  return {
    tag: "div",
    child: [
      {
        tag: "button",
        props: {
          "@click" : () => {
            click.value += 1;
          },
          style: {
            margin: "10px 0"
          }
        },
        child: [
          "Ты нажал сюда ( ",
          click,
          " раз )"
        ]
      }
    ]
  }
}`          
        ]
      },
      button,
    ]
  }
}