import React, {useRef, useState} from 'react';
import './Contact.css';
import Header from "../../components/headerComponent/HeaderComponent";
import Form from "../../components/formComponent/FormComponent";
import Input from "../../components/inputComponent/InputComponent";
import Button from "../../components/buttonComponent/ButtonComponent";
import MailService from "../../services/mailService";
import {useNavigate} from "react-router-dom";
import FooterComponent from "../../components/footerComponent/FooterComponent";


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
            <div className={`contact-container`}>
                <section className={`form-section`}>
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
                            <Input
                                id="user_subject"
                                type="text"
                                placeholder="Vul hier het onderwerp van je bericht in"
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

                        <p>Je bericht is verstuurd! Dankjewel!</p>
                    }
                </section>

                <section className={`whereToFind-section`}>
                    <h2>Route</h2>
                    <article>
                        onze bijeenkomsten zijn op:<br />
                        Wijkcentrum Lopes Dias<br />
                        Lopes Diaslaan 213<br />
                        1222 VE Hilversum
                    </article>
                    <iframe
                        title={`whereToFind`}
                        src={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4886.2026720722515!2d5.179591000000001!3d52.241543!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c66b4e1624c3bb%3A0x6655cb80e60622c0!2sWoondienstencentrum%20Lopes%20Dias!5e0!3m2!1snl!2snl!4v1692459524624!5m2!1snl!2snl"}
                        width="400"
                        height="300"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                    <a href={"https://www.google.com/maps/place/Woondienstencentrum+Lopes+Dias/@52.241335,5.178484,15z/data=!4m6!3m5!1s0x47c66b4e1624c3bb:0x6655cb80e60622c0!8m2!3d52.2413345!4d5.1784836!16s%2Fg%2F11cn3v2459?hl=nl&entry=ttu"} target={"_blank"} rel={"noopener noreferrer"}>ROUTE</a>
                </section>


            </div>
            <FooterComponent />

        </>
    );
}

export default Contact;