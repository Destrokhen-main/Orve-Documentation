import subTitle from "../../helper/subTitle";
import TitleText from "../../helper/TitleText";
import Code from "../../helper/Code";

import Example from "./ex";
import layerForExample from "../../helper/layerForCode";

export default function() {
  return {
    tag: "div",
    props: {
      style: "flex-grow: 1"
    },
    child: [
      {
        tag: subTitle,
        child: "refC"
      },
      "<p>В прошлой статье, мы уже поговорили об реактивных примитивах.</p>",
      "<p>Но как нам быть с компонентами?</p>",
      "<p>Для таких случаев, существует refC</p>",
      "<p>Он умеет принимать компоненты и прерисовывать из в случаи изменения</p>",
      {
        tag: Code,
        child: `
          const component1 = function() {
            return {
              tag: "div",
              child: "component-1"
            }
          }

          const component2 = function() {
            return {
              tag: "div",
              child: "component-2"
            }
          }


          import { refC } from "orve";

          export default function() {
            const comp = refC(component1);
            let current = 0; 
            return {
              tag: "div",
              props: {
                "@click": () => {
                  comp.value = current === 0 ? component2 : component1;
                  current = current === 0 ? 1 : 0;
                }
              },
              child: comp
            }
          }
        `
      },
      "<p>В итоге получим</p>",
      {
        tag: layerForExample,
        props: {
          file: "ex.js"
        },
        child: Example
      },
      "<p>Вот так мы можем работать с реактивными компонентами.</p>"
    ]
  }
}