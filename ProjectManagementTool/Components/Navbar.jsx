import React from 'react'

const Navbar = () => {
  return (
    <div className=' w-full flex flex-row justify-between  bg-blue-500 p-5 text-white'>
      <h1 className=''>PGTs</h1>
      <ul className='flex flex-row gap-10'>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Task Management</a></li>
        <li><a href="#">Team Management</a></li>
      </ul>
      <div>Profile</div>
    </div>
  )
}

export default Navbar
