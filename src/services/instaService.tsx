import emailjs from '@emailjs/browser';
import axios from "axios";

class InstaService {

    async fetchInstagramPost(): Promise<any> {
        return axios
            .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=${process.env.REACT_APP_INSTA_ACCESS_TOKEN}`)
    }
}

const instaService: InstaService = new InstaService();
export default instaService;
