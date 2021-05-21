import User from './User';
import Category from "./Category";

export default class Page{
    pageId='';
    pageTitle='';
    content='';
    category = new Category();
    author = new User();
}