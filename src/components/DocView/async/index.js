import subTitle from "../../helper/subTitle";
import TitleText from "../../helper/TitleText";
import Code from "../../helper/Code";

import Layer from "../../helper/LayerBody";
import layerForExample from "../../helper/layerForCode";
import Example from "./ex";

export default function () {
  return {
    tag: Layer,
    child: [
      {
        tag: subTitle,
        child: "Работа с асинхронными методами"
      },
      {
        tag: "div",
        child: `
        <p>
          Примеры работы с асинхронными запросами.<br/>
          Для начала определим реактивные переменные, которые нам понадобятся.<br/>
          <br/>
          <br/>
          Для запросов я использовал <a href="https://jsonplaceholder.typicode.com/posts/" target="_blank">https://jsonplaceholder.typicode.com/posts/</a><br/>
          Изначально я посмотрел на то, как описывается объект.
        </p>
        `
      },
      {
        tag: Code,
        child:`
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
        }
        `
      },
      {
        tag: "div",
        child: `
        <p>
        Получим вот такой вот объект
        </p>`
      },
      {
        tag: Code,
        child:`
        const answer = {
          body: ref("-"),
          id: ref("-"),
          title: ref("-"),
          userId: ref("-")
        };
        `
      },
      {
        tag: "div",
        child: `
        <p>
          Теперь отобразим этот объект в нашей верстке.
        </p>`
      },
      {
        tag: Code,
        child:`
        {
          tag: "div",
          child: [
            {
              tag: "p",
              child: [ "id: " , answer.id]
            },
            {
              tag: "p",
              child: [ "user-id: ", answer.userId]
            },
            {
              tag: "p",
              child: ["title: ", answer.title]
            },
            {
              tag: "p",
              child: ["body: ", answer.body] 
            }
          ]
        }
        `
      },
      {
        tag: "div",
        child: `<p>
          Теперь сделаем какое-то поле ввода, в которое будем помещать id записи, которую хотим получить.<br/>
          Для этого, определим ещё один ref для поля ввода.
        </p>`
      },
      {
        tag: Code,
        child: `
        const input = ref(1);
        `
      },
      {
        tag: "div",
        child: `
        <p>
          Отлично! Осталось создать метод для обновления данных в input и метод, где будет происходить запрос.
        </p>
        `
      },
      {
        tag: Code,
        child: `
        {
          tag: "div",
          child: [
            {
              tag: "input",
              props: {
                "@input": (e) => {
                  input.value = e.target.value;
                },
                type: "number",
                min: 1,
                max: 100,
                value: 1
              }
            }
          ]
        }
        `
      },
      {
        tag: "div",
        child: `
        <p>В качестве триггера для поиска, я выбрал кнопку.</p>
        `
      },
      {
        tag: Code,
        child:`
        {
          tag: "button",
          props: {
            "@click": () => {
              request(input.value);
            }
          },
          child: "Find"
        }
        `
      },
      {
        tag: "div",
        child: `
        <p>Отлично! Вы уже заметили функцию request. Давайте посмотрим на неё.</p>
        `
      },
      {
        tag: Code,
        child: `
        const request = (params = 1) => {
          fetch("https://jsonplaceholder.typicode.com/posts/" + params)
            .then(e => e.json())
            .then(e => {
              answer.body.value = e.body;
              answer.id.value = e.id;
              answer.title.value = e.title;
              answer.userId.value = e.userId;
            });
        }
        `
      },
      {
        tag: "p",
        child: `Вот и всё, посмотреть на пример вы можете ниже.`
      },
      {
        tag: layerForExample,
        props: {
          file: "ex.js"
        },
        child: Example
      },
      {
        tag: "p",
        props: {
          style: {
            fontStyle: "italic"
          }
        },
        child: 'Полный код, а так же много чего ещё, вы можете увидеть в исходном коде этого проекта.'
      }
    ]
  }
}