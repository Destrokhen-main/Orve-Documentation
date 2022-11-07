import subTitle from "../../helper/subTitle";
import Code from "../../helper/Code";

import Layer from "../../helper/LayerBody"

export default function() {
  return {
    tag: Layer,
    child: [
      {
        tag: subTitle,
        child: "Reactive Object"
      },
      `<p>
        Данная статья, была специально расположена после асинхронных функций, сейчас покажу почему.<br/>
        В прошлой статье, мы столкнулись с тем, что объявляли единичные ref для объекта.<br />
        Отсюда появляется вопрос, а что делать, если в объекте 
      </p>`
    ]
  }
}