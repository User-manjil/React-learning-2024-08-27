import React from 'react'
import Navbar from '../Components/Navbar'
import DashBoard from '../Components/DashBoard'
import SiderBar from '../Components/SiderBar'

function App() {
  return (
    <div>
      <Navbar/>
      <div className='flex flex-row justify-between gap-20 w-full px-1'>
      <SiderBar/>
      <DashBoard/>
      </div>
      
    </div>
  )
}

export default App
