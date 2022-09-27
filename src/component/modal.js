import Start from "../component/screen/start";
import File from "../component/screen/file";
import Component from "../component/screen/component";
import Reactive from "../component/screen/reactive";
import Watch from "../component/screen/watch";

const modal = () => {
  return {
    tag: "div",
    props: {
      style: {
        width: "70%",
        padding: "0 5px"
      },
      class: "modal-block"
    },
    child: [
      Start,
      File,
      Component,
      Reactive,
      Watch
    ]
  }
}

export default modal;