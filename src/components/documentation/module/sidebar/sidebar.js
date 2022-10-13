import style from "./sidebar.sc.scss";

export default () => {
  return {
    tag: "div",
    props: {
      class: style.modal
    },
    child: [
      "menu"
    ]
  }
}