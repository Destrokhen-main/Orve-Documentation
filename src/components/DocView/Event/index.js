import subTitle from "../../helper/subTitle";
import TitleText from "../../helper/TitleText";
import Code from "../../helper/Code";

import Layer from "../../helper/LayerBody"

export default () => {
  return {
    tag: Layer,
    child: [
      {
        tag: subTitle,
        child: [
          "Event"
        ]
      },
      {
        tag: "p",
        child: [
          "Event - важная часть в разработке."
        ]
      },
      {
        tag: "p",
        child: [
          "Помните, я говорил вам про то, что в props указываются все атрибуты, которые буду прописаны в атрибутах HTML Element."
        ]
      },
      {
        tag: "p",
        child: [
          "Так же в props указываться все event, которые будут использоваться в HTML Element."
        ]
      },
      {
        tag: "p",
        child: [
          "Что я понимаю под event. Помните как вы в ванильном js писали вот такие конструкции."
        ]
      },
      {
        tag: Code,
        child: [
          `
          document.addEventListener("event (click | input | change | ...)", callback)
          `
        ]
      },
      {
        tag: "p",
        child: [
          "Чтобы прописать такую же конструкцию в Simple-Reactive, вам нужно использовать вот такую схему"
        ]
      },
      {
        tag: Code,
        child: [
          `
          props: {
            "@название event": () => {}
          }
          `
        ]
      },
      {
        tag: "p",
        child: [
          "Так же, как и в первом случаи, в функцию которую вы указали будет приходить event"
        ]
      },
      {
        tag: "p",
        child: [
          "Например, давайте посмотрим, как реализовать отслеживания текста в input с клавиотуры."
        ]
      },
      {
        tag: Code,
        child: [
          `
          export default () => {
            return {
              tag: "input",
              props: {
                "@input": (e) => {
                  console.log(e.target.value);
                } 
              }
            }
          }
          `
        ]
      },
      {
        tag: "p",
        child: [
          "Вот такой код в итоге даст возможность следить за тем, что было введено в поле input"
        ]
      },
      {
        tag: "p",
        child: [
          "Стоит заметить, что такие конструкции лучше не отправлять в props layer. Лучшее решение будет сделать вот так."
        ]
      },
      {
        tag: "p",
        child: [
          "Например, наша задача состоит в том, чтоб понять когда пользовать нажмёт на кнопку внутри другого компонента"
        ]
      },
      {
        tag: Code,
        child: [
          `
          const component = (props) => {
            return {
              tag: "div",
              props: {
                "@click": props.callback
              },
              child: [
                {
                  tag: "button",
                  child: [
                    "click"
                  ]
                }
              ]
            }
          }

          export default () => {
            const click = () => {
              console.log("clicked")
            }

            return {
              tag: component,
              props: {
                callback: click
              }
            }
          }
          `
        ]
      },
      {
        tag: "p",
        child: [
          "Вот такой код, поможет решить нам эту проблему. Тоже самое можно сделать с input например, или select. "
        ]
      }
    ]
  }
}