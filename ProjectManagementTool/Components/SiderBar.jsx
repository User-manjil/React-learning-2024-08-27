import React from 'react'

const SiderBar = () => {
  return (
    <div className='fixed w-[200px] flex text-center items-center flex-col h-full gap-5 bg-blue-200   '>
        <ul>
        <a className=' hover:text-black hover:bg-gray-50  block  px-20' href="Home"> Hello        </a>
        </ul>
      
    </div>
  )
}

export default SiderBar
