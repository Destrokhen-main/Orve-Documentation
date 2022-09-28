import "./body.scss";

export default (props) => {
  return {
    tag: "div",
    props: {
      class: "block-body"
    },
    child: [
      ...props.children,
    ]
  }
}