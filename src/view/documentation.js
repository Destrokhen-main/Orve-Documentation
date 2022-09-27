import sidebar from "../component/sidebar";
import modal from "../component/modal"

export default () => {
  return {
    tag: "div",
    props: {
      style: {
        display: "flex",
        marginBottom: "20px"
      }
    },
    child: [
      sidebar,
      modal
    ]
  }
}