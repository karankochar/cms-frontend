import { CategoryService } from "../Services/CategoryService"
import React from 'react'
import Reactdom from 'react-dom'
import App from '../App'
import AddCategory from '../Components/Categorycomponents/AddCategory'
import AddUser from '../Components/Usercomponents/AddUser'
import AddPage from '../Components/Pagecomponents/AddPage'
import { BrowserRouter as Router } from 'react-router-dom';

it("All Components renders correctly",()=>{
   const div=document.createElement('div');
    Reactdom.render(<App/>,div);
    Reactdom.unmountComponentAtNode(div);
})
it("AddCategory Components renders correctly",()=>{
    const div=document.createElement('div');
    <Router>
    Reactdom.render(<AddCategory/>,div);</Router>
    Reactdom.unmountComponentAtNode(div);
})
it("AddUser Components renders correctly",()=>{
    const div=document.createElement('div');
    <Router>  Reactdom.render(<AddUser/>,div);</Router>
    Reactdom.unmountComponentAtNode(div);
})

it("AddPage Components renders correctly",()=>{
    const div=document.createElement('div');
    <Router>  Reactdom.render(<AddPage/>,div);</Router>
    Reactdom.unmountComponentAtNode(div);
})

// test cases for some services

test('Find Category By Id', () => {
    expect(new CategoryService().findCategoryById
        (-1) == false).toBe(false)

})

test('Delete Category By Id', () => {
    expect(new CategoryService().deleteCategoryById
        (-1) == false).toBe(false)

})