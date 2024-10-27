"use client"

import useLenis from "@/components/lenis";
import { useEffect } from "react";
import { TextRevealDemo } from "@/components/TextReveal";

export default function Home() {

  
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


  return (
    <div className="mt-24 relative">
    
      <TextRevealDemo></TextRevealDemo>
      Produkts
     
     
    </div>
  );
}
