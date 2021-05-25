import axios from "axios";

export class UserService {
    baseUrl = `http://localhost:9090/cms-app/users`;

    viewAll() {
        return axios.get(this.baseUrl + '/viewAll');
    }
}