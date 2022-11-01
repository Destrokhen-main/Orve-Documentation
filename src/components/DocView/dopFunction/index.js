import subTitle from "../../helper/subTitle";
import TitleText from "../../helper/TitleText";
import Code from "../../helper/Code";

import Layer from "../../helper/LayerBody"

export default function() {
  return {
    tag: Layer,
    child: [
      {
        tag: subTitle,
        child: "Дополнительные функции"
      },
      "<p>В библиотеке присуствуют различные функции.</p>",
      "<p>Поговорим о них</p>",
      {
        tag: TitleText,
        child: "Watch"
      },
      "<p>Иногда нам нужно отследить изменения в какой-то реактивной переменной</p>",
      "<p>В такой ситуации нам поможет watch</p>",
      {
        tag: Code,
        child: `
          import { watch } from "orve";

          watch(callback, dependency);
        `
      },
      "<p>Стоит заметить, что в wath присваивается только одна зависимость</p>",
      "<p>Так же стоит заметить, что в зависимости можно положить только прокси orve</p>",
      "<p>Пример использования</p>",
      {
        tag: Code,
        child: `
          import { ref, watch } from "orve";
          export default function() {
            const r = ref("");
            watch(() => {
              ...
            }, r);

            return {
              tag: "div",
              child: r
            }
          }
        `
      },
      "<p>Вот так мы сможем следить за тем, что происходит с переменной r</p>",
      {
        tag: TitleText,
        child: "effect"
      },
      "<p>Вспомним про прошлую статью. Бывают ситуации, когда нужно последить вывести например свять двух ref или что-то такое. Для этого поможет effect</p>",
      "<p>Его можно использовать как в child так и props</p>",
      {
        tag: Code,
        child: `
          export default function() {
            const r = ref("");
            return {
              tag: "div",
              props: {
                class: effect(() => {
                  if (r.value === "some text")
                    return "active"
                  else
                    return ""
                }, [r])
              },
              child: effect(() => r.value + " some text...", [r])
            }
          }
        `
      },
      "<p>Тут в отличие от watch в зависимости представляют собой массив</p>",
      "<p>Вы можете использовать effect и watch как для ref так и для refC</p>",
      "<p>Если у вас есть доступ к исходному коду этого проекта, вы можете посмотреть, как я использовал effect для подсветки текущей страницы</p>"
    ]
  }
}