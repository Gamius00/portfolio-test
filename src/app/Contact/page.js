"use client"

import React, { useRef } from 'react'
import Navbar from '../Navbar'
import style from "./contact.module.css"

export default function page() {

  return (
    <div>
      <div className={style.contentflexbox}>
      <div className={style.contentbox}>
        <p>Discord:</p>
        <p>Email: <a href="mailto:GescheaftlichGamius@gmx.de" >GescheaftlichGamius@gmx.de</a></p>
        <p>Test</p>
      </div>
      </div>
    </div>
  )
}
