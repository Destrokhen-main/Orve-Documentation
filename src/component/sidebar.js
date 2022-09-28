import Title from "./comp/title";

import link from "../component/comp/link";

const sidebar = (props) => {
  return {
    tag: "div",
    props: {
      class: "side-bar",
    },
    child: [
      {
        tag: Title,
        props: {
          title: "Меню",
        }
      },
      props.array.map(i => {
          return {
            tag: "div",
            props: {
              "@click" : function() {
                props.call(i);
              }
            },
            child: [
              {
                tag: link,
                props: {
                  title: i.title,
                  id: i.id
                }
              }
            ]
          }
      }),
    ]
  }
}

export default sidebar;