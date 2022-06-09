import React from 'react'
import "./app.css"




import TopBar from './components/topBar/TopBar'
import SideBar from './components/sideBar.jsx/SideBar'
import Home from './pages/home/Home'


/*import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; */


import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserList from './pages/userList/UserList'

import User from './pages/user/User'
import NewUser from './pages/newUsers/NewUser'
import ProductList from './pages/productList/ProductList'
import Products from './pages/products/Products'
import NewProduct from './pages/Newproduct/NewProduct'
import TransFile from "./pages/Transfile/TransFile.jsx"





function App () {
  return (
  <BrowserRouter>
   <TopBar />
      <div className="container">
        <SideBar />

  <Routes>
  <Route index element={<Home />} />
  
  <Route path="/" element={<Home />} />   

          <Route path="users" element={<UserList />} />     

          <Route path="user:Id" element={<User />} />
         <Route path= "newUsers" element={ <NewUser />} />
         <Route path= "products" element={ <ProductList />} />
         <Route path="product:Id" element={<Products />} />
         <Route path='newProduct' element={ < NewProduct />} /> 

          
         <Route path='TRA' element={ < TransFile />} /> 


  </Routes>
  
  
  
  
      </div>
  
  </BrowserRouter>

    

    
  )
} 



export default App