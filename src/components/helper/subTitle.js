export default (props) => {
  return {
    tag: "h2",
    props: {
      style: {
        margin: "10px 20px",
        textAlign: "start"
      },
    },
    child: [
      ...props.children,
    ]
  }
}