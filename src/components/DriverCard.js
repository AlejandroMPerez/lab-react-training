import React from "react";

function DriverCard (props) {

    return (
        <div className="DriverCardParent">
            <div>
                <img className="DriverCardImage" src={props.img} alt="Profile_Image" />
            </div>
            <div className="DriverCardInfo">
                <p>{props.name}</p>
                <p>{props.rating}</p>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )

}

export default DriverCard;