"use client"
import React, { useEffect } from 'react'
import Galerry from "../../components/Galerry"
import useLenis from '@/components/lenis';


const Galeria = () => {
 function useScript(src) {
   useEffect(() => {
     const script = document.createElement("script");
     script.src = src;
     script.defer = true;
     script.dataset.useServiceCore = true;
     document.body.appendChild(script);

     return () => {
       document.body.removeChild(script);
     };
   }, [src]);
 }
 useScript("https://static.elfsight.com/platform/platform.js");
 useLenis();
      useLenis();
  return (
    <div>
      <Galerry></Galerry>
    </div>
  );
}

export default Galeria;
