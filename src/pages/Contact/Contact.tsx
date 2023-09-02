import React, {useRef, useState} from 'react';
import Spacer from '../../components/spacer/Spacer';
import MailService from "../../services/mailService";
import './Contact.css';
import Header from "../../components/header/Header";

function Contact() {
    const [isSent, setIsSent] = useState<boolean>(false);
    const form: any = useRef<HTMLFormElement>(null);

    function sendEmail(e: any): void {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”
        MailService
            .sendEmail(form)
            .then(() => setIsSent(!isSent))
            .catch((e: any) => console.error(e));
    }

    return (
        <>
            <Header/>
            <div className={`container`}>

                {!isSent ?
                    <section className="contact">
                        <div className="spacer-form-container">
                            <Spacer/>


                            <div className="contact-form-container">
                                <h2>Neem contact met ons op</h2>
                                <div className="contact-form">
                                    <form ref={form} onSubmit={sendEmail} className={`form`}>
                                        <div className="form-control">
                                            <input
                                                type="text"
                                                id="user_name"
                                                name="user_name"
                                                placeholder="Vul hier je naam in"
                                                className="input-field"
                                                required
                                            />
                                        </div>
                                        <div className="form-control">
                                            <input
                                                type="email"
                                                id="user_email"
                                                name="user_email"
                                                placeholder="Vul hier je emailadres in"
                                                className="input-field"
                                                required
                                            />
                                        </div>
                                        <div className="form-control">
                                    <textarea
                                        id="message"
                                        placeholder="Schrijf hier je bericht aan ons"
                                        name="message"
                                        className="input-field"
                                        required
                                    ></textarea>
                                        </div>
                                        <button type="submit" value="Send" className={'submit-btn'}>
                                            Versturen
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <Spacer/>
                        </div>

                    </section>
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


            </div>

        </>
    );
}

export default Contact;