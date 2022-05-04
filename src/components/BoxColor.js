import React from "react";

    function BoxColor (props) {

        return (
            <div 
                style={{ 
                    border: "1px solid black",
                    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` }}>

                <p style={{textAlign: "center", color: "white"}}>rgb({props.r},{props.g},{props.b})</p>
            </div>
        );       

    }

export default BoxColor