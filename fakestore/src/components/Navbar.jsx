import React, { useState } from 'react'
import { MdShoppingCart } from "react-icons/md";
import { NavLink } from 'react-router-dom'; 
import SearchItem from './SearchItem'; 


const Navbar = ({cartItems,searchValue,changeSearchValue}) => { 
 
 
  return (
    <div >
      <nav className='flex lg:justify-between items-center lg:h-20 h-32 max-w-6xl mx-auto flex-col md:flex-row gap-5'>
        <NavLink to="/">
          <div className='ml-5 text-3xl text-slate-100'>
              fakestore
          </div>
        </NavLink>

        <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'> 
         <SearchItem searchValue={searchValue} changeSearchValue={changeSearchValue}/>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className='relative'>
              <MdShoppingCart fontSize={30}/>  
              { cartItems.length >0 && 
              <span className='absolute -top-1 -right-1 bg-green-600 w-5 h-5 flex justify-center items-center rounded-full animate-bounce'>{cartItems.length}</span>
              }
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar