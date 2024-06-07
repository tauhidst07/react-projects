import React from 'react'
import Navbar from './components/Navbar' 
import Home from './pages/Home' 
import { Routes, useLocation } from 'react-router-dom' 
import { Route } from 'react-router-dom' 
import { useState } from 'react' 
import { useEffect } from 'react' 
import Cart from './pages/Cart'
const App = () => {  
  const API_URL="https://fakestoreapi.com/products"  
  const [cartItems, setCartItems] = useState([]); 
  const [items, setItems] = useState([])  
  const [searchValue, setSearchValue] = useState("")   
  const [filterItems,setFilterItems] = useState([]) 
  const [loading, setLoading] = useState(false) 

  // function to change search value 
  const changeSearchValue = (e)=>{
    setSearchValue(e.target.value)     
    if(searchValue == ""){
      setFilterItems(items)
    }
    setFilterItems(items.filter((item)=>item.title.toLowerCase().includes(searchValue.toLowerCase())))  
 }  
 //  function to fetch items..
  const fetchItems = async ()=>{  
    setLoading(true)
     try{ 
     console.log("fetching items...")    
     const response = await fetch(API_URL);  
     const data = await response.json(); 
     console.log("data ..",data); 
     setItems(data) 
     setFilterItems(data) 
     console.log("filter",filterItems)
     } 
     catch(error){
      console.log("error..",error) 
      setItems([])
     } 
     setLoading(false)
  } 

  useEffect(()=>{
     fetchItems()
  },[])
  return (
    <div>
        <div className="bg-slate-900">
          <Navbar cartItems={cartItems}  searchValue={searchValue} setSearchValue={setSearchValue} changeSearchValue={changeSearchValue} />
        </div>
        <Routes>
          <Route path="/" element={<Home cartItems={cartItems} setCartItems={setCartItems} filterItems={filterItems} setItems={setItems} loading={loading}/>} /> 
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>} />
        </Routes>
    </div>
  )
}

export default App