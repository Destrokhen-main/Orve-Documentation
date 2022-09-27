import "./layer.scss";

const layer = (props) => {
  return {
    tag: "div",
    props: {
      class: "layer",
      style: {
        marginTop: "10px"
      }
    },
    child: [
      ...props.children
    ]
  }
}

export default layer;