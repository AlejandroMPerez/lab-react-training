import React from "react";

function Greetings (props) {
    
    let greet;
    switch (props.lang) {
        case "en":
            greet = "Hello";
            break;
        case "es":
            greet = "Hola";
            break;
        case "de":
            greet = "Hallo";
            break;
        default:
            greet = "Bonjour";
            break;
    }

    return <p> {greet} {props.children} </p> 

}


export default Greetings;