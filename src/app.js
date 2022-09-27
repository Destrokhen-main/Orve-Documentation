import "./style.scss";
import layer from "./layout/layer";
import doc from "./view/documentation";

const App = () => {
  return {
    tag: "div",
    props: {
      style: {
        display: "flex",
        justifyContent: "center"
      }
    },
    child: [
      {
        tag: layer,
        props: {
          children: [
            doc
          ]
        }
      }
    ]
  }
}

export default App;