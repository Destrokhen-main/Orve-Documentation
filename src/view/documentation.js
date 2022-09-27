import { refC } from "../../core"
import sidebar from "../component/sidebar";
import modal from "../component/modal"


import Start from "../component/screen/start";
import File from "../component/screen/file";
import Component from "../component/screen/component";
import Reactive from "../component/screen/reactive";
import Watch from "../component/screen/watch";
import ReactiveComponent from "../component/screen/reactiveComponent";

const instriction = {
  "#start" : Start,
  "#file" : File,
  "#component" : Component,
  "#reactive": Reactive,
  "#watch": Watch,
  "#reactComp": ReactiveComponent
};

export default () => {
  const screen = refC(instriction["#reactComp"]);
  const switchScreen = (e) => {
    screen.value = instriction[e.id];
  }

  return {
    tag: "div",
    props: {
      style: {
        display: "flex",
        marginBottom: "20px"
      }
    },
    child: [
      {
        tag: sidebar,
        props: {
          call : switchScreen
        }
      },
      {
        tag: modal,
        child: [
          screen
        ]
      }
    ]
  }
}