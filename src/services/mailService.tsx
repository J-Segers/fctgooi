import emailJs from '@emailjs/browser';

class EmailService {

    async sendEmail(form: HTMLFormElement): Promise<any> {
        // @ts-ignore
        return emailJs.sendForm(process.env.REACT_APP_MAILJS_SERVICE_ID,
            process.env.REACT_APP_MAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_MAILJS_PUBLIC_KEY)
    }
}

const emailService:EmailService = new EmailService();
export default emailService;