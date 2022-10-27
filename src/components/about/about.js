import style from "./about.sc.scss";

import SubTitle from "../helper/subTitle";

export default () => {
  return {
    tag: "div",
    props: {
      class: style.body
    },
    child: [
      {
        tag: "div",
        props: {
          style: {
            textAlign: "center"
          }
        },
        child: [
          {
            tag: "img",
            props: {
              src: require("@/assets/image/logo.png"),
            }
          }
        ]
      },
      {
        tag: "p",
        child: [
          "Всем привет! Это сайт библиотеки Simple-Reactive.",
          "<br/>",
          "Весь сайт написан на этой библиотеки."
        ]
      },
      {
        tag: SubTitle,
        child: [
          "Зачем нужен?"
        ]
      },
      {
        tag: "p",
        child: [
          "Данная бибилиотека пытается предложить свой подход для реактивных фреймворков.",
          "<br />",
          "На данный момент библиотека развивается медлено, но Вы можете помочь мне и сообществу, которое будет ей пользоваться в будущем."
        ]
      },
      {
        tag: "p",
        child: [
          "Библиотека предлагает объектный подход к реализации HTML. Это позволит вам интегрировать систему с алгоритмами генерации кода"
        ]
      },
      {
        tag: SubTitle,
        child: [
          "Как помочь?"
        ]
      },
      {
        tag: "p",
        child: [
          "Всё просто! Заходите на Github и помогайте сделать библиотеку лучше"
        ]
      },
      {
        tag: "p",
        child: [
          {
            tag: "a",
            props: {
              href: "https://github.com/Destrokhen-main/Simple-Reactive-npm-project",
              target: "_blank"
            },
            child: [
              "Ссылка на webpack проект."
            ]
          },
          " Используйте его для разработки)"
        ]
      },
      {
        tag: "p",
        child: [
          {
            tag: "a",
            props: {
              href: "https://github.com/Destrokhen-main/Simple-Reactive-npm",
              target: "_blank"
            },
            child: [
              "Ссылка на npm пакет"
            ]
          },
        ]
      },
      {
        tag: "p",
        props: {
          style: {
            fontStyle: "italic"
          }
        },
        child: [
          "Текущая версия v0.0.23"
        ]
      }
    ]
  }
}