import axios from "axios";

export class LoginService {
    baseUrl = `http://localhost:9090/cms-app/login`;

    login(login) {
        return axios.post(this.baseUrl, login);
    }
}