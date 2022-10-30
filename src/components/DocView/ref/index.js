import subTitle from "../../helper/subTitle";
import TitleText from "../../helper/TitleText";
import Code from "../../helper/Code";

import Example from "./ex";
import Example1 from "./ex1";

export default function() {
  return {
    tag: "div",
    child: [
      {
        tag: subTitle,
        child: "ref"
      },
      "<p>Реактивные переменные давно являются частью любого фреймворка или библиотеки</p>",
      "<p>Simple-Reactive старается пока только предложить свой подход. Есть вероятность, что от него в будущем придётся отказаться. Но пока он есть</p>",
      {
        tag: TitleText,
        child: "В чём заключается подход"
      },
      "<p>Вся реактивность строиться на Proxy. Только вместо зависимостей на node. Каждый ref запоминает, где он был расположен. И в случаи изменение, сам вносит изменения во всем местах, где был расположен</p>",
      "<p>На данный момент, ref хорошо работает (или старается хорошо работать) c примитивами (number string)</p>",
      "<p>В будущем добавится поддержка object и array</p>",
      {
        tag: TitleText,
        child: "Как пользоваться"
      },
      "<p>Чтобы использовать ref, его нужно сначала импортировать</p>",
      {
        tag: Code,
        child: `
        import { ref } from "orve"
        `
      },
      "<p>Дальше его нужно вызвать</p>",
      {
        tag: Code,
        child: `
          export default function() {
            const reactive = ref(number | string)
            return {...}
          }
        `
      },
      "<p>После данных действий, вам вернётся объект.</p>",
      {
        tag: TitleText,
        child: "Что лежит внутри?"
      },
      "<p>Внутри будет лежать</p>",
      {
        tag: Code,
        child: `
          {
            parent: [] - все места где встречается объект,
            value: number | string - значение 
          }
        `
      },
      "<p>Чтобы изменить, значение, нужно обратиться к value и что-то в него присвоить</p>",
      {
        tag: Code,
        child: `
          const r = ref(0);
          r.value += 1;
        `
      },
      "<p>Остаётся понять, как использовать этот объект в вашей вертке</p>",
      "<p>Пример, как можно связать input и тег p</p>",
      {
        tag: Code,
        child: `
          export default function() {
            const r = ref("");
            return {
              tag: "div",
              child: [
                {
                  tag: "p",
                  child: r
                },
                {
                  tag: "input",
                  props: {
                    "@input": (e) => {
                      r.value = e.target.value;
                    },
                    placeholder: "Введите что-то"
                  }
                }
              ]
            }
          }
        `
      },
      "<p>В итоге получим</p>",
      Example,
      "<p>Стоит заметить. Если вы напишите r.value в child. ref к сожалению не сможет привязать данное поле к себе</p>",
      {
        tag: Code,
        child: `
          *НЕ РАБОТАЕТ*
          const r = ref("");
          return {
            tag: "p",
            child: r.value
          }
        `
      },
      "<p>Что же делать, когда нам нужно вернуть например склейку из 2 ref</p>",
      "<p>В данной ситуации, сможет помочь другая функция effect. О ней будет в одной из статей ниже</p>",
      "<p>Вы так же можете, вставлять ref в атрибуты</p>",
      "<p>Вот пример, который поможет вам разобраться</p>",
      {
        tag: Code,
        child: `
          import { ref } from "orve";

          export default function() {
            const attribute = ref(0);
            return {
              tag: "div",
              child: [
                {
                  tag: "p",
                  props: {
                    id: attribute,
                    "@click" : () => {
                      attribute.value += 1;
                    }
                  },
                  child: [
                    "Ты нажал сюда ",
                    attribute,
                    " раз"
                  ]
                }
              ]
            }
          }
        `
      },
      "<p>В итоге получаем</p>",
      Example1
    ]
  }
}