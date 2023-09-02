import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import Spacer from "../spacer/Spacer";

import './Form.css';
import MailService from "../../services/mailService";
import {useNavigate} from "react-router-dom";

Form.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

function Form(props: { title: string, isSubmitted:any, setIsSubmitted:any, children: any, submitAction?: any, afterSubmit?: any }) {
    const form: any = useRef<HTMLFormElement>(null);
    const navigate = useNavigate();

    function sendEmail(e: any): void {
        e.preventDefault();
        MailService
            .sendEmail(form)
            .then(():void => {
                props.setIsSubmitted(!props.isSubmitted)
                setTimeout(() => {
                    props.afterSubmit?props.afterSubmit():navigate('/')
                }, 5000)
            })
            .catch((e: any) => console.error(e));
    }

    return (
        <section className="contact">
            <div className="spacer-form-container">
                <Spacer/>
                <div className="contact-form-container">
                    <h2>{props.title}</h2>
                    <div className="contact-form">
                        <form ref={form} onSubmit={props.submitAction?props.submitAction:sendEmail} className="form">
                            {props.children}
                        </form>
                    </div>
                </div>
                <Spacer/>
            </div>

        </section>
    );
}

export default Form;