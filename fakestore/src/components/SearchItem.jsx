import React from 'react' 


const SearchItem = ({searchValue,changeSearchValue}) => { 
  
  return (
    <div>
        <input type="text" placeholder='enter item name'  
        className='w-[250px] px-[20px] py-[10px] rounded-sm text-slate-900 outline-none'
         value={searchValue} 
         onChange={changeSearchValue}
        /> 
    </div>
  )
}

export default SearchItem