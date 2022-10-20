export default (props) => {
  return {
    tag: "div",
    props: {
      style: {
        backgroundColor: "#e5e5e5",
        padding: "10px 5px",
        margin: "10px 0",
        borderRadius: 5
      }
    },
    child: [{
      tag: "code",
      child: [
        {
          tag: "pre",
          child: [
            props.children
          ]
        }
      ]
    }]
  }
}