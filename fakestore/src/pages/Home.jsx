import React, { useDebugValue, useEffect, useState } from 'react'
import Product from '../components/Product' 
import Spinner from '../components/Spinner' 


const Home = ({cartItems, setCartItems,filterItems,loading}) => {  
 console.log("home filter",filterItems)
  return (
    <div>
    {  
      loading ? (
       <Spinner/>
      ) :(

        filterItems.length > 0 ? (
        
          <div className='grid  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  max-w-6xl mx-auto space-x-5 space-y-10 justify-center'>
            {
              filterItems.map((post)=>(
                <Product key={post.id} post={post}  cartItems={cartItems} setCartItems={setCartItems}/>
              ))
            }
          </div>
        ):( 
          <div className='w-full h-full justify-center items-center'>
          <p> NO post Found </p> 
          </div>
        ) 
      )
    }
</div>
  )
}

export default Home