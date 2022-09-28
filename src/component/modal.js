const modal = (props) => {
  return {
    tag: "div",
    props: {
      style: "flex-grow: 1; padding: 0 5px",
      class: "modal-block"
    },
    child: [
      ...props.children
    ]
  }
}

export default modal;