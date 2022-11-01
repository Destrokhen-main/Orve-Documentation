import subTitle from "../../helper/subTitle";
import TitleText from "../../helper/TitleText";
import Code from "../../helper/Code";

import Layer from "../../helper/LayerBody"

export default () => {
  return {
    tag: Layer,
    child: [
      {
        tag: subTitle,
        child: [
          "Как расписать HTML - элемент"
        ]
      },
      {
        tag: "p",
        child: [
          "Чтобы собрать сайт, нужно использовать HTML элементы, но как их объявить."
        ]
      },
      {
        tag: "p",
        child: [
          "Напомню, что эта библиотека использует подход в котором весь html представлен ввиде объектов. Каждый объект может содержать"
        ]
      },
      {
        tag: Code,
        child: [
          `
          {
            tag: "",
            props: {},
            child: []
          }
          `
        ]
      },
      {
        tag: "p",
        child: [
          "В объектах можно использовать только данные параметры"
        ]
      },
      {
        tag: "p",
        child: [
          "Сразу замечу, объект может не содержать child и props, но tag содержать обязан"
        ]
      },
      {
        tag: "p",
        child: [
          "Давайте посмотрим на параметры внимательнее."
        ]
      },
      {
        tag: TitleText,
        child: [
          "tag"
        ]
      },
      {
        tag: "p",
        child: [
          "tag может содержать или строку с названием тега или же ссылку на компонент"
        ]
      },
      {
        tag: Code,
        child: [
          `
            tag: "div" || Component ( () => { return {tag: "",props: {}, child: [] }} )
          `
        ]
      },
      {
        tag: "p",
        child: [
          "*О компонентах, мы поговорим позже"
        ]
      },
      {
        tag: TitleText,
        child: [
          "props"
        ]
      },
      {
        tag: "p",
        child: [
          "Props представляет собой все свойства, которые будут помещаться в атрибуты HTML element"
        ]
      },
      {
        tag: Code,
        child: [
          `
          props: {
            class: "",
            id: "",
            ...
          }
          `
        ]
      },
      {
        tag: "p",
        child: [
          "Это ещё не все возможности props, но давайте не забегать вперед."
        ]
      },
      {
        tag: TitleText,
        child: [
          "child"
        ]
      },
      {
        tag: "p",
        child: [
          "В child храниться массив таких же объектов, что мы описывали выше, а так же простые строки или же теги по типу '<br />' '<hr />'"
        ]
      },
      {
        tag: "p",
        child: [
          "Стоит заметить, что вы можете положить ещё один массив внутри child. Зачем это нужно?"
        ]
      },
      {
        tag: "p",
        child: [
          "Например, вам нужно отобразить массив ссылок."
        ]
      },
      {
        tag: Code,
        child: [
          `
          const array = [link1, link2, link3, link4, link5];

          {
            tag: "div",
            props: {},
            child: [
              array.map((element) => {
                return {
                  tag: "a",
                  child: [
                    element
                  ]
                }
              })
            ]
          }
          `
        ]
      },
      {
        tag: "p",
        child: [
          "Вот так ваша задача будет решена)"
        ]
      }
    ]
  }
}