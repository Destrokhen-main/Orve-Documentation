import "./body.scss";

import Documentation from "../view/documentation";

export default () => {
  return {
    tag: "div",
    props: {
      class: "block-body"
    },
    child: [
      Documentation
    ]
  }
}