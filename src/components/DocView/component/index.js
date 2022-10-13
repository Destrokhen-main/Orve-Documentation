import subTitle from "../../helper/subTitle";
import TitleText from "../../helper/TitleText";
import Code from "../../helper/Code";

export default () => {
  return {
    tag: "div",
    child: [
      {
        tag: subTitle,
        child: [
          "Компоненты"
        ]
      },
      {
        tag: "p",
        child: [
          "Один из главных моментов любого фреймворка, это компоненты"
        ]
      },
      {
        tag: "p",
        child: [
          "Посмотрим, как можно создать компонент и как его использовать",
        ]
      },
      {
        tag: Code,
        child: [
          `
          const componentName = () => {
            return {
              tag: "",
              props: {},
              child: []
            }
          }
          `
        ]
      }
    ]
  }
}