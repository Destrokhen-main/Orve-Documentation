export default (props) => {
  return {
    tag: "code",
    props: {
      style: {
        margin: "10px 0"
      }
    },
    child: [
      props.code
    ]
  }
}