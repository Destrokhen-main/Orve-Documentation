import subTitle from "../../helper/subTitle";
import TitleText from "../../helper/TitleText";
import Code from "../../helper/Code";

import Layer from "../../helper/LayerBody"

export default function() {
  return {
    tag: Layer,
    child: [
      {
        tag: subTitle,
        child: "Plugin"
      },
      "<p>В одной из статей выше, я рассказывал вам про плагин sreact-router</p>",
      "<p>Как написать что-то такое для вашего проекта</p>",
      "<p>Вы можете использовать простые функции и вызывать их в компонентах. Но если вам нужно использовать что-то глобально для всего проекта тут вам помогут plugin</p>",
      {
        tag: TitleText,
        child: "Создание"
      },
      "<p>Для того, чтобы создать плагин не нужно много усилий</p>",
      "<p>Давайте создадим объект например с ip для приложения</p>",
      {
        tag: Code,
        child: `
        Создадим фаил, в него запишем 
        export default {
          $key: {
            ip: "0.0.0.0"
          }
        }
        `
      },
      "<p>Стоит заметить, что фаил обязательно должен вернуть объект вот такого рода. Использование $ не обязательно, но будет круто если вы будете его использовать в название плагина</p>",
      "<p>После зайдём в фаил index.js</p>",
      {
        tag: Code,
        child: `
          import myplugin from "..."
          const app = createApp({ myplugin, App });
          app.mount("#app");
        `
      },
      "<p>Все! Плагин стал доступен проекту. Теперь наш $key будет доступен в контексте. Можете использовать его как хотите</p>",
      {
        tag: Code,
        child: `
          this.$key.ip -> "0.0.0.0"
        `
      },
      "<p>Вы спокойно можете использовать например различные функции или например ref или refC. Ограничения только в вашей фантазии</p>"

    ]
  }
}