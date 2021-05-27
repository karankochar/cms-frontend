import axios from "axios";

export class CategoryService {
    baseUrl = `http://localhost:9090/cms-app/category`;

    viewAll() {
        return axios.get(this.baseUrl + '/viewAll');
    }

    addCategory(category) {
        return axios.post(this.baseUrl + `/addCategory/`, category);
    }
    findCategoryById(categoryId) {
        return axios.get(`${this.baseUrl}/search/${categoryId}`);
    }
    findAllCategory() {
        return axios.get(this.baseUrl + '/viewAll');
    }
    deleteCategoryById(categoryId) {
        return axios.delete(`${this.baseUrl}/delete/${categoryId}`);
    }
    modifyCategory(category) {
        return axios.put(this.baseUrl + '/modifyCategory/', category);
    }
}