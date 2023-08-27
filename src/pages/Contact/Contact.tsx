import React, {useRef} from 'react';
import MailService from "../../services/mailService";
import './Contact.css';
import IMessage from "../../models/message";

function Contact() {
    const [isSent, setIsSent] = React.useState<boolean>(false);
    const [fieldsFilled, setFieldsFilled] = React.useState<boolean>(false);
    const [info, setInfo] = React.useState<IMessage>(); // [name, setName] = useState("");
    const form: any = useRef<HTMLFormElement>(null);

    function sendEmail(e: any): void {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”
        MailService
            .sendEmail(form)
            .then(() => setIsSent(!isSent))
            .catch((e: any) => console.error(e));
    }

    function changeValue(e: any) {
        if (info?.user_email !== "" && info?.user_message !== "" && info?.user_name !== "") {
            setFieldsFilled(true);
        } else {
            setFieldsFilled(false);
        }
        setInfo({...info, [e.target.name]: e.target.value})
    }

    return (
        <div className={`container`}>

            <section className={`form-section`}>
                {!isSent ?
                    <form ref={form} onSubmit={sendEmail} className={`form`}>
                        <h1>Neem contact op</h1>
                        <input type="text"
                               name="name"
                               placeholder="Naam"
                               onChange={changeValue}
                               value={info?.user_name}
                        />
                        <input type="email"
                               name="user_email"
                               placeholder="Emailadres"
                               onChange={changeValue}
                               value={info?.user_email}
                        />
                        <textarea name="message"
                                  placeholder="Schrijf hier je bericht"
                                  onChange={changeValue}
                                  value={info?.user_message}
                        />
                        <button type="submit" value="Send" disabled={!fieldsFilled}>
                            Versturen
                        </button>
                    </form>
                    :
                    <p>Je bericht is verstuurd! Dankjewel!</p>
                }
            </section>

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
    );
}

export default Contact;