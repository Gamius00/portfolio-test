"use client"

import React, { useState, useEffect }  from 'react'
import style from "./navbar.module.css"
import Image from "next/image";

export default function Navbar() {

  const [imageSrc, setImageSrc] = useState('/menu3.png');

  useEffect(() => {
    function handleScroll() {
        let windowY = window.scrollY || window.pageYOffset;
        console.log(windowY);

        if (windowY > 0) {
          const menudiv = document.getElementById("menudiv");
          menudiv.style.backgroundColor = "#5e5e5e";
          menudiv.style.boxShadow = "0 0 2px white, 0 0 4px white, 0 0 6px white, 0 0 4px white, 0 0 8px white, 0 0 10px white";
        
        } else if (windowY === 0) {
          const menudiv = document.getElementById("menudiv");
          if(imageSrc == "/menu3.png") {
            menudiv.style.backgroundColor = "transparent";
            menudiv.style.boxShadow = "none";
          }

      }
    }

    window.onscroll = handleScroll})

  const handleclick = () => {
    let windowY = window.scrollY || window.pageYOffset;
    const menudiv = document.getElementById("menudiv"); 
    if (imageSrc === '/menu3.png') {
      setImageSrc('/cross2.png');
      if(windowY == 0) {
        menudiv.style.backgroundColor = "#5e5e5e";
        menudiv.style.boxShadow = "0 0 2px white, 0 0 4px white, 0 0 6px white, 0 0 4px white, 0 0 8px white, 0 0 10px white";
      }
      menudiv.style.height = "200px";
      menudiv.style.width = "95%";
    } else {
      setImageSrc('/menu3.png');
      if(windowY == 0) {
        menudiv.style.backgroundColor = "transparent";
        menudiv.style.boxShadow = "none";
      }
      menudiv.style.height = "70px";
      menudiv.style.width = "17%";
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
