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
        child: [
          doc
        ]
      }
    ]
  }
}

export default App;