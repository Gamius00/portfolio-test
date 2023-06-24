"use client"

import React from 'react'
import Navbar from '../Navbar'
import style from "./contact.module.css"
import { Content } from 'next/font/google'

export default function page() {

  return (
    <div>
        <Navbar/>

      <div className={style.contentflexbox}>
        <div onMouseOver={() => {}} className={style.contactfield}>
          <p className={style.headtext}>Test</p>
          <p className={style.contacttext}>Test2</p>
        </div>
      </div>
    </div>
  )
}
