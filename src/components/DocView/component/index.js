import subTitle from "../../helper/subTitle";
import TitleText from "../../helper/TitleText";
import Code from "../../helper/Code";

export default () => {
  return {
    tag: "div",
    props: {
      style: "flex-grow: 1"
    },
    child: [
      {
        tag: subTitle,
        child: "Компоненты"
      },
      {
        tag: "p",
        child: "Один из главных моментов любого фреймворка, это компоненты"
      },
      {
        tag: "p",
        child: "Посмотрим, как можно создать компонент и как его использовать",
      },
      {
        tag: Code,
        child:`
          const componentName = () => {
            return {
              tag: "",
              props: {},
              child: []
            }
          }
          `
      },
      {
        tag: "p",
        child: "В библиотеке компонент, это функция. Вы можете использовать 2 варианта объявления компонента."
      },
      {
        tag: Code,
        child: `
          **Первый вариант**
          const component = () => {}

          **Второй подход**
          const component = function() {}
          `
      },
      {
        tag: "p",
        child: "Каждая функция компонента обязательно должна вернуть HTML Element."
      },
      {
        tag: "p",
        child: "Теперь давайте посмотрим, как же нам использовать компонент из одного файла в другом. На самом деле, все очень просто"
      },
      {
        tag: Code,
        child: `
          **file.js**
          export default () => {
            return {
              tag: "div",
              child: [
                "component"
              ]
            }
          }
          -----------

          **App.js**
          import Component from "file.js";

          export default () => {
            return {
              tag: "div",
              child: [
                Component
              ]
            }
          }
          ----------
        `
      },
      {
        tag: TitleText,
        child: "Layout"
      },
      {
        tag: "p",
        child: "Теперь посмотрим, как использовать слои при разработки ваших интерфейсов."
      },
      {
        tag: "p",
        child: "Чтобы использовать слой, вам нужно указать названия комопнента в tag"
      },
      {
        tag: Code,
        child: `
          const layer = () => {
            return {
              tag: "div",
              child: ["layer"]
            }
          }

          export default () => {
            return {
              tag:layer,
            }
          }
        `
      },
      {
        tag: "p",
        child: "Использовать слои это конечно круто, но иногда нам хочется отдать что-то слою, чтоб он с этим что-то сделал. Как же это сделать?"
      },
      {
        tag: "p",
        child: "Когда вы прописываете в tag ссылку на компонент, props и child этого тега становяться props"
      },
      {
        tag: Code,
        child: `
          *В props будет*
          props = {
            все что лежить в props родителя,
            children: Array child из родителя
          }

          Например в этом случаи будет
          props = {
            id: "id",
            children: [ "Text" ]
          }
          ---------------

          const layer = (props) => {
            return {
              tag: "div",
              props: {
                id: props.id
              },
              child: [
                props.children
              ]
            }
          }

          export default () => {
            return {
              tag: layer,
              props: {
                id: "id"
              },
              child: [
                "Text"
              ]
            }
          }
        `
      },
      {
        tag: TitleText,
        child: "Что нового?"
      },
      "<p>Теперь вы можете писать html в child объектов</p>",
      {
        tag: Code,
        child: `
          export default function() {
            return {
              tag: "div",
              child: "<p>Текст который будет отображаться</p>"
            }
          }
        `
      },
      "<p>Так же вы можете писать `child` не как массив, а как один объект.</p>",
      {
        tag: subTitle,
        child: "Контекст"
      },
      "<p>" +
        "У вашего компонента есть один глобальный контекст, который даёт вам возможность либо хранить какие-то переменные, либо использовать какие-то полезные плагины. Например" +
        " <a href='https://github.com/Destrokhen-main/Simple-Reactive-router' target='_blank'>sreact-router</a>" +
      "</p>",
      "<p>О том, как создавать такие плагины, будет в одном из следующих пунктов.</p>",
      "<p>Так вот, чтобы использовать context. У вас есть 2 варианта.</p>",
      {
        tag: Code,
        child: `
          *1 вариант*
          const component = function(){
            this - тут будет лежать контекст
          }

          *2 вариант*
          import { context } from "orve"

          const component = () => {
            const c = context();
          }
        `
      },
      "<p>Что в первом, что во втором случаи, вас будет доступен глобальный объект контекста.</p>",
      "<p>Пример с контекстом будет постоен на плагине sreact-router, ссылка на него была выше, ознакомьтесь</p>",
      {
        tag: Code,
        child: `
          const component = function() {
            return {
              tag: "div",
              props: {
                "@click": () => {
                  this.$router.push("/path");
                }
              },
              child: "Главная"
            }
          }
        `
      }
    ]
  }
}