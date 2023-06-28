"use client"

import React, { useRef } from 'react'
import Navbar from '../Navbar'
import style from "./contact.module.css"

export default function page() {

  return (
    <div>
        <Navbar/>
      <div className={style.contentflexbox}>
      <div className={style.contentbox}>
        <p>Discord ...</p>
        <p>Email: ...</p>
        <p>Test</p>
      </div>
      </div>
    </div>
  )
}
