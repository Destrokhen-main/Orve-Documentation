import SideBar from "./module/sidebar/sidebar";

import style from "./documentation.sc.scss";

import { routerLink } from "sreact-router";

export default () => {
  return {
    tag: "div",
    props: {
      class: style.documentation
    },
    child: [
      SideBar,
      routerLink
    ]
  }
}