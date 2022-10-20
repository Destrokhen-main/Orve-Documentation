export default (props) => {
  return {
    tag: "h2",
    props: {
      style: {
        margin: "10px 0 ",
        textAlign: "start",
        textDecoration: "underline"
      },
    },
    child: [
      props.children,
    ]
  }
}