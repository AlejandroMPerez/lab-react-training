/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

function IdCard (props) {
    
    return (
        <div>
            <p><b>First name:</b> {props.lastName}</p>
            <p><b>Last name:</b> {props.firstName}</p>
            <p><b>Gender:</b> {props.gender}</p>
            <p><b>Height:</b> {props.height}</p>
            <p><b>Birth:</b> {props.birth.toString()}</p>
            <img src={props.picture} alt="profile-picture"/>
        </div>
    );
}

export default IdCard;