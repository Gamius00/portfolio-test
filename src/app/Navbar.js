"use client"

import React from 'react'
import style from "./navbar.module.css"

export default function Navbar() {
  return (
    <div className={style.navbar}>
        <a href='/'>Home</a>
        <a href='/Projects' >Projects</a>
        <a href='/Contact' >Contact</a>
    </div>
  )
}
