import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { DashBoard } from '../pages'
// import { DashBoard } from '../pages'

const LayoutPage = () => {
  const[useId,setUserId]=useState(sessionStorage.getItem('userId'))
  useEffect(()=>{
    const id = sessionStorage.getItem('userId')
    setUserId(id)
  },[setUserId])


  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        {
           useId !== null ?(<DashBoard/>):(<Outlet/>)
        }
      </div>
    </div>
  )
}

export default LayoutPage
