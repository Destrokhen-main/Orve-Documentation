const component1 = function() {
  return {
    tag: "div",
    child: "component-1"
  }
}

const component2 = function() {
  return {
    tag: "div",
    child: "component-2"
  }
}


import { refC } from "sreact";

export default function() {
  const comp = refC(component1);
  let current = 0; 
  return {
    tag: "div",
    props: {
      "@click": () => {
        comp.value = current === 0 ? component2 : component1;
        current = current === 0 ? 1 : 0;
      }
    },
    child: comp
  }
}