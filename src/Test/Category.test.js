import { CategoryService } from "../Services/CategoryService"
import { Category } from "../Models/Category"
import React from 'react'
import {render,fireEvent} from '@testing-library/react'
import Reactdom from 'react-dom'
import App from '../App'
import AddCategory from '../Components/Categorycomponents/AddCategory'
import AddUser from '../Components/Usercomponents/AddUser'
import AddPage from '../Components/Pagecomponents/AddPage'

it("All Components renders correctly",()=>{
   const div=document.createElement('div');
    Reactdom.render(<App/>,div);
    Reactdom.unmountComponentAtNode(div);
})
it("AddCategory Components renders correctly",()=>{
    const div=document.createElement('div');
    Reactdom.render(<AddCategory/>,div);
    Reactdom.unmountComponentAtNode(div);
})
it("AddUser Components renders correctly",()=>{
    const div=document.createElement('div');
    Reactdom.render(<AddUser/>,div);
    Reactdom.unmountComponentAtNode(div);
})
it("AddPage Components renders correctly",()=>{
    const div=document.createElement('div');
    Reactdom.render(<AddPage/>,div);
    Reactdom.unmountComponentAtNode(div);
})


