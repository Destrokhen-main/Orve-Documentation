import style from "./sidebar.sc.scss";

export default (props) => {
  return {
    tag: "div",
    props: {
      class: style.modal
    },
    child: [
      props.links.map((e) => {
        return {
          tag: "div",
          props: {
            style: {
              padding: "5px 0"
            }
          },
          child: [
            {
              tag: "a",
              props: {
                "@click": () => {
                  props.changeLink(e.id);
                }
              },
              child: [
                e.title
              ]
            }
          ]
        }
      }) 
    ]
  }
}