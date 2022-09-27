import "./layer.scss";

const layer = (props) => {
  return {
    tag: "div",
    props: {
      class: "layer"
    },
    child: [
      ...props.children
    ]
  }
}

export default layer;