import { ref } from "orve";

export default function () {
  const input = ref(1);

  const answer = {
    body: ref("-"),
    id: ref("-"),
    title: ref("-"),
    userId: ref("-")
  };

  const request = (params = 1) => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + params)
      .then(e => e.json())
      .then(e => {
        answer.body.value = e.body;
        answer.id.value = e.id;
        answer.title.value = e.title;
        answer.userId.value = e.userId;
      });
  }
  request(1);
  return {
    tag: "div",
    child: [
      {
        tag: "div",
        child: [
          {
            tag: "p",
            child: [ "<strong>id: </strong>" , answer.id]
          },
          {
            tag: "p",
            child: [ "<strong>user-id: </strong>", answer.userId]
          },
          {
            tag: "p",
            child: ["<strong>title: </strong>", answer.title]
          },
          {
            tag: "p",
            child: ["<strong>body: </strong>", answer.body] 
          }
        ]
      },
      {
        tag: "div",
        child: [
          {
            tag: "input",
            props: {
              "@input": (e) => {
                input.value = e.target.value;
              },
              type: "number",
              min: 1,
              max: 100,
              value: 1
            }
          },
          {
            tag: "button",
            props: {
              "@click": () => {
                request(input.value);
              }
            },
            child: "Find"
          }
        ]
      }
    ]
  }
}