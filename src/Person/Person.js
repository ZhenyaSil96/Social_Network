import React from "react";

const Person = (props) => {
    return (
        <div>
            <ul>
                <li>Person name = {props.name}</li>
                <li>Person Lasname = {props.lastName}</li>
                <li>Person age = {props.age}</li>
            </ul>
        </div>
    )
}

// export default Person