import Title from "./comp/title";

import menu from "../menu/menu";

const sidebar = () => {
  return {
    tag: "div",
    props: {
      style: {
        width: "30%",
        padding: {
          right: "5px",
          left: "5px",
          bottom: "10px"
        },
        backgroundColor: "white",
        borderRadius: "5px",
      }
    },
    child: [
      {
        tag: Title,
        props: {
          title: "Меню"
        }
      },
      menu
    ]
  }
}

export default sidebar;