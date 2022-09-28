import { refC } from "sreact"
import sidebar from "../component/sidebar";
import modal from "../component/modal"


import Start from "../component/screen/start";
import File from "../component/screen/file";
import Component from "../component/screen/component";
import Reactive from "../component/screen/reactive";
import Watch from "../component/screen/watch";
import ReactiveComponent from "../component/screen/reactiveComponent";
import Layer from "../component/screen/layer";

const instruction = {
  "#start" : Start,
  "#file" : File,
  "#component" : Component,
  "#reactive": Reactive,
  "#watch": Watch,
  "#reactComp": ReactiveComponent,
  "#layer": Layer
};

const ar = [
  {
    title: "Запуск",
    id: "#start"
  },
  {
    title: "Файловая система",
    id: "#file"
  },
  {
    title: "Компоненты",
    id: "#component"
  },
  {
    title: "Реактивность",
    id: "#reactive"
  },
  {
    title: "Watch",
    id: "#watch"
  },
  {
    title: "Реактивные компоненты",
    id: "#reactComp"
  },
  {
    title: "Layer",
    id: "#layer"
  }
]

const reloc = (path) => {
  try {
    history.pushState(null, null, path);
    return;
  } catch(e) {}
  location.hash = path;
}

export default () => {
  const path = "#" + document.location.pathname.replace("/", "");
  let setup = path;
  if (instruction[setup] === undefined) {
    setup = "#start";
    reloc(setup.replace("#", ""));
  }

  const screen = refC(instruction[setup]);
  const switchScreen = (e) => {
    if (setup !== e.id) {
      screen.value = instruction[e.id];
      setup = e.id;
      reloc(e.id.replace("#", ""))
    }
  }

  return {
    tag: "div",
    props: {
      style: {
        display: "flex",
        width: "100%"
      }
    },
    child: [
      {
        tag: sidebar,
        props: {
          call : switchScreen,
          array: ar
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