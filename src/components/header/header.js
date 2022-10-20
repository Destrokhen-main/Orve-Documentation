import style from "./header.sc.scss";

export default (props) => {
  return {
    tag: "div",
    props: {
      class: style.header
    },
    child: [
      {
        tag: "div",
        props: {
          class: style.logo
        },
        child: [
          {
            tag: "img",
            props: {
              src: require("@/assets/image/logo.png")
            }
          },
          {
            tag: "div",
            child: [
              "Simple-Reactive"
            ]
          }
        ]
      },
      {
        tag: "div",
        props: {
          class: style.link
        },
        child: [
          {
            tag: "a",
            props: {
              "@click": () => {
                props.changePage("documentation")
              }
            },
            child: [
              "Документация",
            ]
          },
          {
            tag: "a",
            props: {
              "@click": () => {
                props.changePage("about")
              }
            },
            child: [
              "О проекте"
            ]
          }
        ]
      }
    ]
  }
}