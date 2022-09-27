import "./layer.scss";

export default (props) => {
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