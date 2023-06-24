"use client"

import Image from 'next/image'
import Navbar from './Navbar'
import style from "./home.module.css"
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  
  return (

    <div>

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"/>
      <Navbar/>
    <div className={style.hello}>
      <div className={style.content}> 
      <p className={style.fabiustext}>Hello there 👋</p>
      <p className={style.fabiustext}>I'm Fabius </p>
      <p className={style.intern}>Software Engineering Student for</p>

      <TypeAnimation className={style.portfoliotext}
      sequence={[
        'Web Development', 
        2000, 
        'Mobile Development', 
        2000, 
        'Discord Bot Development', 
        2000
      ]}
      repeat={Infinity}
      speed={3}
    />
    </div>

    <div className={style.picturecontainer}>
    <Image src="/programmerpic.png" width={180} height={180} className={style.picture}/>
    </div>
    </div>
    </div>
  )
}
