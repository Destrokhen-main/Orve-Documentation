import subTitle from "../../helper/subTitle";
import TitleText from "../../helper/TitleText";
import Code from "../../helper/Code";

import layerForExample from "../../helper/layerForCode";

import Layer from "../../helper/LayerBody"

export default function() {
  return {
    tag: Layer,
    child: [
      {
        tag: subTitle,
        child: "refL"
      },
      `<p>
        Чтобы получить доступ к HTML element, можно использовать refL
      </p>`,
      {
        tag: Code,
        child: `
        import { refL } from "orve";

        export default function () {
          const r = refL();
          return {
            tag: "div",
            child: "hello",
            ref: r
          }
        }
        `
      },
      `<p>
        Теперь, в момент когда компонент будет отрисован, вам станет доступен в r HTMLElement<br/>
      </p>`,
      {
        tag: Code,
        child: `
          refL => {
                    parent: [],
                    value: null -> Html Element
                 }
        `
      },
      `<p>
        <br />
        Как понять, что refL пришёл в компонент из кода?<br/><br/>
        Для того, чтобы словить появление refL можете использовать effect
      </p>`,
      {
        tag: Code,
        child: `
        import { refL, effect } from "orve";

        export default function () {
          const r = refL();
          effect(() => {
            console.log(r.value)
          }, [r]);
          return {
            tag: "div",
            child: "hello",
            ref: r
          }
        }
        `
      }
      
    ]
  }
}