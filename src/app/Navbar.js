"use client"

import React, { useState, useEffect }  from 'react'
import style from "./navbar.module.css"
import Image from "next/image";

export default function Navbar() {

  const [imageSrc, setImageSrc] = useState('/menu2.png');

  useEffect(() => {
    function handleScroll() {
        let windowY = window.scrollY || window.pageYOffset;
        console.log(windowY);

        if (windowY > 0) {
          const menudiv = document.getElementById("menudiv");
          menudiv.style.backgroundColor = "#d1aece";
          menudiv.style.boxShadow = "0 0 2px #d1aece, 0 0 4px #d1aece, 0 0 6px #d1aece, 0 0 4px #d1aece, 0 0 8px #d1aece, 0 0 10px #d1aece";
        
        } else if (windowY === 0) {
          const menudiv = document.getElementById("menudiv");
          menudiv.style.backgroundColor = "transparent";
          menudiv.style.boxShadow = "none";

      }
    }

    window.onscroll = handleScroll})

  const handleclick = () => {
    const menudiv = document.getElementById("menudiv"); 
    if (imageSrc === '/menu2.png') {
      setImageSrc('/cross.png');
      menudiv.style.height = "200px";
    } else {
      setImageSrc('/menu2.png');
      menudiv.style.height = "70px";
    }
  }

  return (
    <div>
    <div className={style.navbar}>
        <a href='/'>Home</a>
        <a href='/Projects' >Projects</a>
        <a href='/Contact' >Contact</a>
    </div>
    <div className={style.navcenter}>
    <div id='menudiv' className={style.menudiv}>
    <Image onClick={handleclick} id='menu' src={imageSrc} width={40} height={40} className={style.menu}/>
    </div>
    </div>
    </div>
  )
}
