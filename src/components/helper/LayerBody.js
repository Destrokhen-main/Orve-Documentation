export default function(props) {
  return {
    tag: "div",
    props: {
      style: "flex-grow: 1"
    },
    child: [
      props.children
    ]
  }
}