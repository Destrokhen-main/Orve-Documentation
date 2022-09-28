const layer = (props) => {
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
}