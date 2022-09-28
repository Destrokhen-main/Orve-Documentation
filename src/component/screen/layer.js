import Title from "../comp/title";
import SubTitle from "../comp/subTitle";
import Code from "../comp/code";

import layer from "../../layout/layerBlock";

import Example from "../example/layer";

export default () => {
  return {
    tag: layer,
    props: {
      id: "layer",
    },
    child: [
      {
        tag: Title,
        props: {
          title: "Layer"
        },
      },
      "Вы можете использовать различные слои для своих компонентов. Важно знать, что когда вы используете layer, вы просто перекидываете всю отвественность на родителя. О этом подробнее ниже",
      {
        tag: "p",
        child: [
          "Как использовать:"
        ]
      },
      {
        tag: "pre",
        child: [
`const layer = (props) => {
  return {
    tag: "div",
    props: {
      ... : props["key"]
    },
    child: [
      ...props.children
    ]
  }
}

const App = () => {
  return {
    tag: layer,
    props: {
      some_key: some_value
    },
    child: [
      "some text or component"
    ]
  }
}
`
        ]
      },
      "В итоге получаем, layer в котором были переданы все необходимы props и children",
      {
        tag: "p",
        child: [
          "Что лежит в props"
        ]
      },
      {
        tag: "pre",
        child: [
`
props = {
  ...props - пропсы которые вы скидываете сверху на layer,
  children: массив child тоже которые вы всерху скидываете
}
`
        ]
      },
      "Пример",
      {
        tag: "pre",
        child: [
`const layer = (props) => {
  return {
    tag: "div",
    child: [
      {
        tag: "h3",
        child: [
          props.title
        ]
      },
      ...props.children
    ]
  }
}

export default () => {
  return {
    tag: layer,
    props: {
      title: "Title сверху",
    },
    child: [
      "Какой-то текст сверху"
    ]
  }
}`
        ]
      },
      "Результат:",
      Example
    ]
  }
}