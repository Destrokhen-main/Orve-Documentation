import WebpackProject from "../components/DocView/fileSystem/index";
import HTMLElement from "../components/DocView/node/index"
import Components from "../components/DocView/component/index";
import Event from "../components/DocView/Event/index";
import Ref from "../components/DocView/ref/index";
import RefC from "../components/DocView/refC/index";
import DopFunction from "../components/DocView/dopFunction/index";

import { beforeRouter, createRouter } from "sreact-router";

const router = [
  {
    path: "/",
    redirect: "/wp-project"
  },
  {
    path: "/wp-project",
    component: WebpackProject,
    meta: {
      title: "Webpack проект"
    }
  },
  {
    path: "/HTML-El",
    component: HTMLElement,
    meta: {
      title: "HTML Element"
    }
  },
  {
    path: "/components",
    component: Components,
    meta: {
      title: "Компоненты"
    }
  },
  {
    path: "/event",
    component: Event,
    meta: {
      title: "Event"
    }
  },
  {
    path: "/ref",
    component: Ref,
    meta: {
      title: "Ref"
    }
  },
  {
    path: "/refC",
    component: RefC,
    meta: {
      title: "RefC"
    }
  },
  {
    path: "/function",
    component: DopFunction,
    meta: {
      title: "Дополнительные функции"
    }
  }
];

beforeRouter((_, to) => {
  document.title = to.meta.title;
});

const object = createRouter(router);

export default object;