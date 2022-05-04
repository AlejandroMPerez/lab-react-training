import React from "react";
//Could not import Master Card image. Something is wrong with the .svg file.

function CreditCard (props) {

    let lastFourDigits = props.number.slice(-4);

    return (
            <div className="CreditCard" style={{backgroundColor: `${props.bgColor}`, color: `${props.color}` }}>
                <p>{props.type}</p>
                <p>•••• •••• •••• {lastFourDigits}</p>
                <p>Expires {props.expirationMonth}/{props.expirationYear} </p>
                <p>{props.bank}</p>
                <p>{props.owner}</p>
            </div> 
    );

}


export default CreditCard  