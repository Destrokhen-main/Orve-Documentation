export default (props) => {
  return {
    tag: "div",
    props: {
      style: {
        marginTop: "30px",
        marginBottom: "10px",
      }
    },
    child: [
      {
        tag: "h3",
        child: [
          props.title
        ]
      },
      {
        tag: "hr",
        props: {
          style: {
            margin: "10px 0"
          }
        }
      }
    ]
  }
}