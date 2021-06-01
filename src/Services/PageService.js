import axios from "axios";

export class PageService {
    baseUrl = `http://localhost:9090/cms-app/page`;

    viewAll() {
        return axios.get(this.baseUrl + '/viewAll');
    }

    addPage(userId,categoryId,page){
        return axios.post(`${this.baseUrl}/addPage/${userId}/${categoryId}`,page)
    }

    deletePageById(pageId) {
        return axios.delete(`${this.baseUrl}/delete/${pageId}`);
      }
      modifyPage(userId, categoryId, page) {
        return axios.put(`${this.baseUrl}/modify/${userId}/${categoryId}`, page);
      }
      
      viewPage(pageId) {
        return axios.get(`${this.baseUrl}/byId/${pageId}`);
      }
    
      findPageByContent(content) {
        return axios.get(`${this.baseUrl}/byContent/${content}`);
      }
      findPageByCategoryAndName(categoryTitle, fullName) {
        return axios.get(
          `${this.baseUrl}/byCategoryUser/${categoryTitle}/${fullName}`
        );
      }
      getAllCategory() {
        return axios.get(`${this.baseUrl}/category`);
      }
}