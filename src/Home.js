import {Form,Button,Container} from 'react-bootstrap';
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { Route, Link,Router,Routes} from 'react-router-dom';
import {fetch} from 'whatwg-fetch';


import Checkout from './comp/Checkout';
import Header from './comp/Header';
import Papper from './comp/Papper';
import Profile from './comp/Profile';
import Order from './comp/Order';
import Wallet from './comp/Wallet';
import Wishlist from './comp/Wishlist';
import View from './comp/View';
import Pdes from './comp/Pdes';
import Front from './comp/Front';
import Dyv from './comp/Dyv';

import DyvSign from './comp/DyvSign';
import Subcard from './comp/Subcard';



function Home()
{
   

   return(
    

 <div>
    
    

     <Routes>
            <Route exact path="Header" element={<Header/>}></Route>
            <Route exact path="/*" element={<Front/>}></Route>
         
            <Route exact path="/Papper" element={<Papper/>}></Route>
            <Route exact path="/Dyv" element={<Dyv/>}></Route>
            <Route exact path="/Profile" element={<Profile/>}></Route>
            <Route exact path="/Order" element={<Order/>}></Route>
            <Route exact path="/Wallet" element={<Wallet/>}></Route>
            <Route exact path="/Wishlist" element={<Wishlist/>}></Route>
            <Route exact path="/View" element={<View/>}></Route>
            <Route exact path="/Checkout" element={<Checkout/>}></Route>
            <Route exact path="/Pdes" element={<Pdes/>}></Route>
           
            <Route exact path="/DyvSign" element={<DyvSign/>}></Route>
          
            <Route exact path="/Subcard" element={<Subcard/>}></Route>

            

</Routes>


 </div>

  
       
   );

}
export default Home;
