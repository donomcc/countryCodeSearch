import React from "react";
import "./Entry.css"

const Entry = (props) => {

    // console.log(props);

    return (
        <div className="card">
            <h2>{props.country}</h2>
            <p>{props.phoneCode}</p>
        </div>
    )
}

export default Entry