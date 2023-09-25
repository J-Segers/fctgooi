import React from 'react';
import './ButtonComponent.css';

function ButtonComponent(props: {
    message: string,
    type: string,
    onClick?: any,
}) {
    if(props.type === "submit") {
        return (
            <button type="submit" value="Send" className={'btn'}>
                {props.message}
            </button>
        );
    } else {
        return (
            <button type="button" onClick={props.onClick} className={'btn'}>
                {props.message}
            </button>
        );
    }
}

export default ButtonComponent;