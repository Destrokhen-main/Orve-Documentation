const Title = ({ title }) => {
  return {
    tag: "div",
    props: {
      style: {
        textAlign: "center"
      }
    },
    child: [
      {
        tag: "h2",
        props: {
          style: {
            margin: "10px 0"
          }
        },
        child: [
          title
        ],
      },
      {
        tag: "hr",
        props: {
          style: {
            marginBottom: "20px"
          }
        }
      }
    ]
  }
}

export default Title;