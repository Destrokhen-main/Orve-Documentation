import "./assets/font/font.scss";
import "./style.scss";
import layer from "./assets/style/layer.sc.scss";
import Header from "./components/header/header";

import { refC } from "orve";

import About from "./components/about/about";
import Documentation from "./components/documentation/documentation";

export default () => {
  const Content = refC(Documentation);
  let current = "docu";

  const changePage = (page) => {
    if (page !== current) {
      if (page === "about") {
        Content.value = About;
      } else {
        Content.value = Documentation
      }
      current = page;
    }
  }

  return {
    tag: "div",
    props: {
      class: "main-window"
    },
    child: [
      {
        tag: Header,
        props: {
          changePage
        }
      },
      {
        tag: "div",
        props: {
          class: layer.layer
        },
        child: [
          Content
        ]
      }
    ]
  }
}