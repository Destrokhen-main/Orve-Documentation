import SideBar from "./module/sidebar/sidebar";
import Body from "./module/body/body"

import style from "./documentation.sc.scss";


import WebpackProject from "../DocView/fileSystem/index";
import HTMLElement from "../DocView/node/index"
import Components from "../DocView/component/index";

import { refC } from "sreact";

let containerLink = [
  {
    title: "webpack проект",
    body: WebpackProject
  },
  {
    title: "HTML Element",
    body: HTMLElement
  },
  {
    title: "Компоненты",
    body: Components
  }
]

containerLink = containerLink.map((e, i) => ({
  ...e,
  id: i
}));

let current = 0;

export default () => {
  const container = refC(containerLink[1].body);

  const changeLink = (id) => {
    if (current !== id) {
      current = id;
      container.value = containerLink[id].body;
    }
  }

  return {
    tag: "div",
    props: {
      class: style.documentation
    },
    child: [
      {
        tag: SideBar,
        props: {
          links: containerLink.map((e) => ({
            title: e.title,
            id: e.id
          })),
          changeLink
        }
      },
      container
    ]
  }
}