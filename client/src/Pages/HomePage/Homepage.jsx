import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Menubar from '../../Components/Menubar/Menubar'
import Slider from '../../Components/Slider/Slider'
import Deal from "../../Components/Deal/Deal"
import style from "./Home.module.css"

const Homepage = () => {
  return (
    <div className={style.home}>
        <Navbar/>
        <Menubar/>
        <Slider/>
        <Deal/>
    </div>
  )
}

export default Homepage