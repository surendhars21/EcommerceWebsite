import React from 'react'
import { Routes,Route } from 'react-router-dom'
import UpdateUser from './UpdateUser'
import UserNavbar from "./UserNavbar";
import UserviewProduct from './UserviewProduct';
import Cart from './Cart';
function UserHomePage() {
    return (
        <div className="userhompage">
            <UserNavbar/>
        <Routes>
            <Route path="/updateuser" element={<UpdateUser/>}/>
            <Route path="/userviewproduct" element={<UserviewProduct/>}/>
            <Route path="/cart/:id" element={<Cart/>}/>
        </Routes>
        </div>
    )
}

export default UserHomePage
