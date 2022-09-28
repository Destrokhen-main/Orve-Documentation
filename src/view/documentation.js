import { refC } from "../../core"
import sidebar from "../component/sidebar";
import modal from "../component/modal"


import Start from "../component/screen/start";
import File from "../component/screen/file";
import Component from "../component/screen/component";
import Reactive from "../component/screen/reactive";
import Watch from "../component/screen/watch";
import ReactiveComponent from "../component/screen/reactiveComponent";

const instruction = {
  "#start" : Start,
  "#file" : File,
  "#component" : Component,
  "#reactive": Reactive,
  "#watch": Watch,
  "#reactComp": ReactiveComponent
};

export default () => {
  let setup = "#reactive";

  const screen = refC(instruction[setup]);
  const switchScreen = (e) => {
    if (setup !== e.id) {
      screen.value = instruction[e.id];
      setup = e.id;
    }
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