const one = (props) => {
  return {
    tag: "div",
    props: {
      id: props.id,
    },
    child: [
      ...props.children
    ]
  }
}

export default () => {
  return {
    tag: "div",
    child: [
      {
        tag:one,
        props: {
          id: "test",
        },
        child: [
          {
            tag: "p",
            child: [
              "какой-то текст"
            ]
          }
        ]
      }
    ]
  }
}