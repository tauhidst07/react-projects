import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className='w-screen h-[calc(100vh-5rem)] flex items-center justify-center'>
      <div className='spinner'></div>
    </div>
  )
}

export default Spinner
