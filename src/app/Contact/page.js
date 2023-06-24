"use client"

import React from 'react'
import Navbar from '../Navbar'
import style from "./contact.module.css"

export default function page() {

  return (
    <div>
        <Navbar/>

      <div className={style.contentflexbox}>
        <div className={style.contactfield}>
          <p className={style.headtext}>Test</p>
          <p className={style.contacttext}>Test2</p>
          <button onClick={() => { favDialog.showModal();}}>Show the dialog</button>
        </div>
      </div>
    </div>
  )
}
