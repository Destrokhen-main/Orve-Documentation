import SideBar from "./module/sidebar/sidebar";
import Body from "./module/body/body"

import style from "./documentation.sc.scss";

export default () => {
  return {
    tag: "div",
    props: {
      class: style.documentation
    },
    child: [
      SideBar,
      Body
    ]
  }
}