import React from "react";

function Random (props) {

    let value = Math.floor(Math.random() * (props.max - props.min) + 1) + props.min;

    return (
        <p>Random value between {props.min} and {props.max} =&gt; {value} </p>
    );


}

export default Random