import React from 'react';
import './Input.css';
function Input(props: {
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
                type="text"
                id={props.id}
                name={props.id}
                placeholder={props.placeholder}
                className="input-field"
                required={props.required}
            ></input>
        );
    }
}

export default Input;


// <div className="form-control">
//     <Input
//         id="user_name"
//         type="text"
//         placeholder="Vul hier je naam in"
//         required={true}
//     />
// </div>