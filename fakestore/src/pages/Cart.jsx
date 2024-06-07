import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom' 
import CartItem from '../components/CartItem'

const Cart = ({cartItems,setCartItems}) => { 

  const [totalAmount,setTotalAmount]=useState(0) 

  useEffect(()=>{ 
  
      setTotalAmount(cartItems.reduce((acc,curr)=>acc+curr.price , 0))
  },[cartItems])

  return (
    <div> 
    {
        cartItems.length > 0 ?
      <div className='flex max-w-6xl mx-auto mt-12 gap-x-6 flex-col md:flex-row w-full justify-center items-center'>  
          <div className='md:max-w-[60%]'>
            {
                cartItems.map((item,index)=>(
                <CartItem key={item.id} item={item} itemIndex={index} setCartItems={setCartItems} cartItems={cartItems}/>
              ))
            } 
      
          </div> 
          <div className='flex flex-col p-4 justify-between text-left  max-w-max mt-10 gap-y-5 md:min-w-[40%] min-w-[80%]'>
            <div >
              <p className='text-green-700 text-[18px] font-semibold'>YOUR CART</p> 
              <p className='text-green-700 text-[3rem] font-semibold'>SUMMARY</p> 
              <p className='text-gray-600 font-semibold text-[18px] mt-2'>Total Items: <span>{cartItems.length}</span></p>
            </div> 
            <div className='w-[100%]'>
              <p className='text-gray-600 font-semibold text-[22px]'>Total Amount: <span className='text-black'>${totalAmount}</span></p>
              <button className='w-full py-4 bg-green-600 text-white font-bold text-[18px] rounded-lg mt-3'>Checkout now</button>
            </div>
          </div> 
          
      </div>
       :
       <div className='w-screen h-[calc(95vh-5rem)] flex items-center justify-center flex-col gap-y-5'> 
        <h1 className='text-gray-800 text-[20px] font-semibold'>Your cart is empty!</h1>  
        <Link to="/">
          <button className='text-white bg-green-600 font-semibold text-[16px] px-8 py-4 rounded-lg'>SHOP NOW</button>
        </Link>
       </div> 
      
    }

    </div>
  )
}

export default Cart