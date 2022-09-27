const modal = (props) => {
  return {
    tag: "div",
    props: {
      style: {
        width: "70%",
        padding: "0 5px"
      },
      class: "modal-block"
    },
    child: [
      ...props.children
    ]
  }
}

export default modal;