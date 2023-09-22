import React from 'react';
import './InputComponent.css';

function InputComponent(props: {
    id: string,
    type: string,
    placeholder: string,
    required: boolean,
}) {
    if (props.type === "textarea") {
        return (
            <textarea
                id="message"
                placeholder="Schrijf hier je bericht aan ons"
                name="message"
                className="input-field"
                required
            ></textarea>
        )
    } else {
        return (
            <input
                type={props.type}
                id={props.id}
                name={props.id}
                placeholder={props.placeholder}
                className="input-field"
                required={props.required}
            ></input>
        );
    }
}

export default InputComponent;


// <div className="formComponent-control">
//     <InputComponent
//         id="user_name"
//         type="text"
//         placeholder="Vul hier je naam in"
//         required={true}
//     />
// </div>