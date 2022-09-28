import "./style.scss";
import layer from "./layout/layer";
import doc from "./view/documentation";

const App = () => {
  return {
    tag: "div",
    props: {
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }
    },
    child: [
      {
        tag: "div",
        props: {
          class: "header"
        },
        child: [
          {
            tag: "div",
            props: {
              style: {
                display: "flex",
                gap: "10px"
              }
            },
            child: [
              {
                tag: "img",
                props: {
                  src: require('../src/assets/logo.png'),
                  style: {
                    width: "20px",
                  }
                }
              },
              {
                tag: "span",
                child: [
                  "simple-reactive"
                ]
              }
            ]
          },
        ]
      },
      {
        tag: layer,
        child: [
          doc
        ]
      }
    ]
  }
}

export default App;