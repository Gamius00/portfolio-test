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

        if (imageSrc == "/cross2.png") {
          menudiv.style.backgroundColor = "transparent";
          menudiv.style.boxShadow = "none";
          menudiv.style.height = "70px";
          menudiv.style.width = "70px";
          setImageSrc('/menu3.png');
        }

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
    const homebutton = document.getElementById("homebutton"); 
    const projectbutton = document.getElementById("projectbutton"); 
    const contactbutton = document.getElementById("contactbutton");
    const views = document.getElementById("views");
    if (imageSrc === '/menu3.png') {
      setImageSrc('/cross2.png');
      if(windowY == 0) {
        menudiv.style.backgroundColor = "#5e5e5e";
        menudiv.style.boxShadow = "0 0 2px white, 0 0 4px white, 0 0 6px white, 0 0 4px white, 0 0 8px white, 0 0 10px white";
      }
      menudiv.style.height = "310px";
      menudiv.style.width = "95%";
      homebutton.style.display = "flex";
      projectbutton.style.display = "flex";  
      contactbutton.style.display = "flex";  
      views.style.display = "flex";  
    } else {
      setImageSrc('/menu3.png');
      if(windowY == 0) {
        menudiv.style.backgroundColor = "transparent";
        menudiv.style.boxShadow = "none";
      }
      menudiv.style.height = "70px";
      menudiv.style.width = "70px";
      homebutton.style.display = "none"; 
      projectbutton.style.display = "none"; 
      contactbutton.style.display = "none"; 
      views.style.display = "none";  
    }
  }

  return (
    <>
    <div className={style.navbar}>
        <a className={style.navelement} href='/'><div><Image src="/home.png" width={30} height={7} className={style.img}/> <p>Home</p></div></a>
        <a className={style.navelement} href='/Projects' ><div><Image src="/document.png" width={30} height={7} className={style.img}/> <p>Projects</p></div></a>
        <a className={style.navelement} href='/Contact' ><div><Image src="/envelope.png" width={30} height={7} className={style.img}/> <p>Contact</p></div></a>
        <a className={style.views} href="https://hits.sh/portfolio-fabius.vercel.app/"><img alt="Hits" src="https://hits.sh/portfolio-fabius.vercel.app.svg?style=for-the-badge&label=Views&extraCount=5&color=858585"/></a>
    </div>
    <div className={style.navcenter}>
    <div id='menudiv' className={style.menudiv}>
    <Image onClick={handleclick} id='menu' src={imageSrc} width={40} height={40} className={style.menu}/>
    <a id='homebutton' className={style.homebutton} href='/'> Home</a>
    <a id='projectbutton' className={style.projectbutton} href='/Projects'>Projects</a>
    <a id='contactbutton' className={style.contactbutton} href='/Contact'>Contact</a>
    <a id='views' className={style.views2} href="https://hits.sh/portfolio-fabius.vercel.app/"><img alt="Hits" src="https://hits.sh/portfolio-fabius.vercel.app.svg?style=for-the-badge&label=Views&extraCount=5&color=858585"/></a>
    </div>
    </div>
    </>
  )
}
