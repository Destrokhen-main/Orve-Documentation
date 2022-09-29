export default (props) => {
  return {
    tag: "div",
    props: {
      style: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: "0 10px",
        paddingBottom: "10px",
        borderRadius: "5px",
      },
    },
    child: [
      ...props.children,
    ]
  }
}