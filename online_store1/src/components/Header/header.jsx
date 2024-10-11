import React from 'react'
import s from './header.module.css'
import { Link } from 'react-router-dom'
import NavMenuu from '../../NavMenuu/NavMenuu'


export default function Header() {
  return (
    <div className={s.header}>
        <Link to='/'><img src="https://mditlevson.us/sites/default/files/styles/front_page_image/public/front-page-images/plant.png?itok=ZXW7McRv" alt="Main" /></Link>
        <NavMenuu/>
        <Link to='/cart'><img src="https://i.pinimg.com/736x/95/67/ba/9567bac44b90867dc730858c2c528f01.jpg" alt="" /></Link>
    </div>
  )
}
