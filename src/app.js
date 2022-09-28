import "./assets/style/main.scss";
import Header from "./header"; 
import Body from "./body";

import Documentation from "./view/documentation";

const test = () => {
  return {
    tag: "div",
    props: {
      class: "block-content"
    },
    child: [
      Header,
      {
        tag:Body,
        child: [
          Documentation
        ]
      },
      Header
    ]
  }
}

export default test;