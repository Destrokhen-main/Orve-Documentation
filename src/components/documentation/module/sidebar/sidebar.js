import style from "./sidebar.sc.scss";
import { effect } from "orve";
import { routerLink } from "sreact-router";

export default function() {
  const links = this.$router.allRoute();
  const filtered = links.filter(e => e.redirect === undefined && e.component !== undefined && e.meta !== undefined);
  return {
    tag: "div",
    props: {
      class: style.modal
    },
    child: [
      filtered.map(e => {
        return {
          tag: "div",
          props: {
            style: {
              padding: "5px 0"
            }
          },
          child: [
            {
              tag: "a",
              props: {
                "@click": () => {
                  this.$router.push(e.path)
                },
                class: effect(() => {
                  const currentPath = this.$router.currentPath();
                  return currentPath === e.path ? style.active : "";
                }, [ routerLink ])
              },
              child: e.meta.title
            }
          ]
        }
      }), 
    ]
  }
}