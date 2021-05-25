import axios from "axios";

export class CategoryService {
    baseUrl = `http://localhost:9090/cms-app/category`;

    viewAll() {
        return axios.get(this.baseUrl + '/viewAll');
    }
}