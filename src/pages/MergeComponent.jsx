import React from 'react'
import  Navbar  from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from "react-router-dom";
const MergeComponent = () => {
  return (
    <div>
        <Navbar/>
        <Outlet />
        <Footer/>
    </div>
  )
}

export default MergeComponent