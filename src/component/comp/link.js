const link = (props) => {
  return {
    tag: "div",
    props: {
      moveTo: props.id,
      style: {
        padding: "10px 10px",
        cursor: "pointer"
      },
      "@click": function () {
        const id = this.props.moveTo;
        const ele = document.querySelector(id);
        window.scrollTo(ele.offsetLeft, ele.offsetTop);
      }
    },
    child: [
      {
        tag: "span",
        props: {
          moveTo: props.id,
        },
        child: [
          props.title
        ]
      }
    ]
  }
}

export default link;