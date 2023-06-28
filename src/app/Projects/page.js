"use client"

import React, {useRef} from 'react'
import Navbar from '../Navbar'
import style from "./projects.module.css"
import Image from "next/image";

export default function page() {

  const dialogRef = useRef(null);

  const click = () => {
    if (dialogRef.current !== null) {
      dialogRef.current.showModal();
    }
  };

  return (
    <div>
      <Navbar/>
      <div className={style.content}>
      <div onClick={click} className={style.passwordgenerator}> 
      <Image src="/password-generator.jpg" width={220} height={100} className={style.passwordgeneratorimage}/>
      <a className={style.passwordgeneratorbutton} href='https://password-generator-gamius.netlify.app'>Try</a>
      <p className={style.passwordgeneratortext}>Password Generator</p>
      </div>

      <dialog ref={dialogRef}>
        <p>Greetings, one and all!</p>
        <form method="dialog">
              <button>OK</button>
            </form>
      </dialog>

      <div className={style.portfolio}> 
      <Image src="/portfolio.png" width={220} height={100} className={style.portfolioimage}/>
      <a className={style.portfoliobutton} href='https://portfolio-fabius.netlify.app'>Try</a>
      <p className={style.portfoliotext}> First Portfolio</p>
      </div>
      </div>

      <div className={style.content2}>
      <div className={style.bot}> 
      <Image src="/discord-bot.png" width={220} height={100} className={style.botimage}/>
      <p className={style.bottext}> Discord Bot</p>
      </div>

      <div className={style.kotlinapp}> 
      <Image src="/kotlin-app.png" width={220} height={100} className={style.kotlinappimage}/>
      <p className={style.kotlinapptext}> Kotlin App</p>
      </div>
      </div>

    </div>
  )
}
