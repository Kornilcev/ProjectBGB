import React from 'react'
import { Link } from 'react-router-dom'
import s from './NavMenuu.module.css'

export default function NavMenuu() {
  return (
    <nav className={s.menu}>
        <Link to='/'>Main Page</Link>
        <Link to='/categories'>Categories</Link>
        <Link to='/all_products'>All products</Link>
        <Link to='/all_sales'>All sales</Link>
    </nav>
  )
}
