import Title from "../comp/title";
import layer from "../../layout/layerBlock";

import example from "../example/effect";
import example1 from "../example/effect-1";

export default () => {

  return {
    tag: layer,
    props: {
      id: "reactiveComp",
    },
    child: [
      {
        tag: Title,
        props: {
          title: "Effect"
        }
      },
      {
        tag: "p",
        child: [
          "Наверно, вы уже заметили, что использовать вместе ref и строки довольно трудно. Приходиться писать подобные конструкции"
        ]
      },
      {
        tag: "pre",
        child: [
`
const r = ref(1)
...
child: [
  "click ( ",
  r,
  " )"
]
`
        ]
      },
      {
        tag: "p",
        child: [
          "Чтобы в результате получить click ( 1 )"
        ]
      },
      {
        tag: "p",
        child: [
          "Понимаю, что это больно, но не могу пока ничего с этим сделать."
        ]
      },
      {
        tag: "p",
        child: [
          "Но есть одна функция, которая может вам немного помочь. Effect"
        ]
      },
      {
        tag: "pre",
        child: [
`import { effect } from "core"
effect(callback, [dependence])`
        ]
      },
      {
        tag: "p",
        child: [
          "Вы можете прописывать её в props и child"
        ]
      },
      {
        tag: "p",
        child: [
          "Пример"
        ]
      },
      {
        tag: "pre",
        child: [
`const r = ref(1)
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
`
        ]
      },
      "Результат",
      example,
      {
        tag: "p",
        child: [
          "Как это работает."
        ]
      },
      {
        tag: "p",
        child: [
          "У нас есть функция и зависисмости. Обратите внимание, что в зависимости можно передать только реактивные объекты. Это нужно для того, чтобы правильно обрабатывать изменения"
        ],
      },
      {
        tag: "p",
        child: [
          "Функция будет вызываться каждый раз при изменение кого-то из массива зависимостей"
        ]
      },
      {
        tag: "p",
        child: [
          "Конечно, код выше, это не всё, для чего можно использовать effect, например вот"
        ]
      },
      {
        tag: "pre",
        child: [
`import { ref, effect } from "sreact";

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
}`
        ]
      },
      "Результат",
      example1,
      {
        tag: "p",
        child: [
          "Возможно не такой крутой пример) Но это все на что меня пока хватило"
        ]
      }
    ]
  }
}