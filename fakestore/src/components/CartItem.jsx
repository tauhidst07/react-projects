import React from 'react'
import { MdDelete } from "react-icons/md";


const CartItem = ({ item, itemIndex ,setCartItems ,cartItems}) => {

  const removeItem = () => {
    setCartItems(cartItems.filter((p)=>p.id !== item.id ))
  }
  return (
    <div>
      <div className='flex md:justify-between  md:gap-x-16  p-4 max-w-max md:flex-row flex-col justify-center items-center w-full'>
        <div className='md:w-[280px] w-[40%]'>
          <img src={item.image} className='w-full md:ml-5 ' />
        </div>
        <div className='flex flex-col gap-y-4 w-full mt-4'>
          <h1 className='text-gray-700 text-[21px] font-semibold'>{item.title}</h1>
          <h1 className='text-gray-500'>{item.description.split(" ").slice(0, 15).join(" ") + "..."}</h1>
          <div className='flex justify-between w-full mt-2 items-center'>
            <p className='text-green-600 font-semibold text-[20px]'>${item.price.toFixed(2)}</p>
            <div onClick={removeItem} className='cursor-pointer bg-red-200 w-10 h-10 rounded-full flex justify-center items-center'>
              <MdDelete className='text-red-700' />
            </div>
          </div>
        </div>
      </div> 
     <div className='w-full h-[2px] bg-gray-600 my-4'></div>
    </div>
  )
}

export default CartItem