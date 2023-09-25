import React, {RefObject} from 'react';
import PropTypes from 'prop-types';
import Spacer from "../spacer/Spacer";

import './FormComponent.css';

FormComponent.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

function FormComponent(
    props: {
        title: string,
        form: RefObject<HTMLFormElement>,
        isSubmitted: boolean,
        setIsSubmitted: any,
        children: any,
        submitAction: any,
    }
) {
    return (
            <div className="spacer-form-container">
                <Spacer/>
                <div className="contact-form-container">
                    <h2>{props.title}</h2>
                    <div className="contact-form">
                        <form ref={props.form} onSubmit={props.submitAction} className="form">
                            {props.children}
                        </form>
                    </div>
                </div>
                <Spacer/>
            </div>
    );
}

export default FormComponent;