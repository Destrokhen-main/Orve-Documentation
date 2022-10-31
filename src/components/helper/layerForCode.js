const layerForExample = function(props) {
    return {
        tag: "div",
        props: {
        style: {
            backgroundColor: "white",
            padding: 10,
            border: "1px solid grey",
            margin: "10px 0",
            borderRadius: 5
        }
        },
        child: [
        {
            tag: "p",
            props: {
            style: {
                fontSize: "12px",
                marginBottom: "10px"
            }
            },
            child: "File: " + props.file
        },
        ...props.children
        ]
    }
}

export default layerForExample;