import axios from "axios";

export class PageService {
    baseUrl = `http://localhost:9090/cms-app/page`;

    viewAll() {
        return axios.get(this.baseUrl + '/viewAll');
    }

    addPage(userId,categoryId,page){
        return axios.post(`${this.baseUrl}/addPage/${userId}/${categoryId}`,page)
    }
}