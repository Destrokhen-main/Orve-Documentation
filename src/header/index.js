import "./header.scss";

export default () => {
  return {
    tag: "div",
    props: {
      class: "header"
    },
    child: [
      {
        tag: "div",
        props: {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "10px"
          },
        },
        child: [
          {
            tag: "img",
            props: {
              src: require("../assets/logo.png"),
              style: {
                width: "20px"
              }
            },
          },
          {
            tag: "div",
            child: [
              "Simple-reactive"
            ]
          }
        ]
      }
    ]
  }
}