import axios from "axios";

export class UserService {
    baseUrl = `http://localhost:9090/cms-app`;

    viewAll() {
        return axios.get(this.baseUrl + '/viewAll');
    }
    addAdmin(admin){
        return axios.post(this.baseUrl+'/addAdmin', admin);
    }
    addUser(user){
        return axios.post(this.baseUrl +'/addUser', user);
    }

    findUserById(userId) {
        return axios.get(`${this.baseUrl}/search/byId/${userId}`);
    }
    findAllUser(){
        return axios.get(this.baseUrl +'/viewAll');

    }
    modifyUser(userId,user) {
        return axios.put(`${this.baseUrl}/modify/byId/${userId}` , user );
    }
    deleteUserById(userId) {
        return axios.delete(`${this.baseUrl}/delete/byId/${userId}`);
    }
}