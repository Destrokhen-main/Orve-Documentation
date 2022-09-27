const link = (props) => {
  return {
    tag: "div",
    props: {
      moveTo: props.id,
      style: {
        padding: "10px 10px",
        cursor: "pointer"
      },
    },
    child: [
      {
        tag: "span",
        props: {
          moveTo: props.id,
        },
        child: [
          props.title
        ]
      }
    ]
  }
}

export default link;