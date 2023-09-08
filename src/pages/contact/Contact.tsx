import React, {useRef, useState} from 'react';
import './Contact.css';
import Header from "../../components/header/Header";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import MailService from "../../services/mailService";
import {useNavigate} from "react-router-dom";
import InstaFeeds from "../../services/instaService";


function Contact() {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const form: any = useRef<HTMLFormElement>(null);
    const navigate = useNavigate();

    function sendEmail(e: any): void {
        e.preventDefault();
        MailService
            .sendEmail(form)
            .then((): void => {
                setIsSubmitted(!isSubmitted)
                setTimeout(() => {
                    navigate('/')
                }, 5000)
            })
            .catch((e: any) => console.error(e));
    }


    return (
        <>
            <Header/>
            <div className={`container`}>
                {!isSubmitted ?
                    <Form form={form}
                          submitAction={sendEmail}
                          title="Neem contact met ons op"
                          isSubmitted={isSubmitted}
                          setIsSubmitted={setIsSubmitted}
                    >
                        <Input
                            id="user_name"
                            type="text"
                            placeholder="Vul hier je naam in"
                            required={true}
                        />
                        <Input
                            id="user_email"
                            type="email"
                            placeholder="Vul hier je emailadres in"
                            required={true}
                        />
                        <Input id="message"
                               type="textarea"
                               placeholder="Schrijf hier je bericht aan ons"
                               required={true}/>
                        <Button
                            type={"submit"}
                            message="Versturen"/>

                    </Form>
                    :
                    <section className={`form-section`}>

                        <p>Je bericht is verstuurd! Dankjewel!</p>

                    </section>
                }

                {/*<section className={`whereToFind-section`}>*/}
                {/*    <iframe*/}
                {/*        title={`whereToFind`}*/}
                {/*        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4886.2026720722515!2d5.179591000000001!3d52.241543!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c66b4e1624c3bb%3A0x6655cb80e60622c0!2sWoondienstencentrum%20Lopes%20Dias!5e0!3m2!1snl!2snl!4v1692459524624!5m2!1snl!2snl"*/}
                {/*        width="400"*/}
                {/*        height="300"*/}
                {/*        loading="lazy"*/}
                {/*        referrerPolicy="no-referrer-when-downgrade">*/}
                {/*    </iframe>*/}
                {/*</section>*/}

<InstaFeeds />
            </div>

        </>
    );
}

export default Contact;