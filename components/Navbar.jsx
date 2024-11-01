"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scroll down
        setIsVisible(false);
      } else {
        // Scroll up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div>
      <div
        className={`fixed top-0 left-0 right-0 flex justify-between bg-black z-50 items-center p-6 sm:px-12 px-6 bg-background transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center">
          <div className="text-2xl font-bold mx-auto lg:absolute lg:top-[30px] lg:left-[43.5%] d">
            SRDCOM I TELOM
          </div>
          <div className="hidden lg:flex space-x-8">
            <nav>
              <ul className="flex space-x-8">
                <li className="relative">
                  <a
                    href="/"
                    className="text-muted hover:text-muted-foreground"
                  >
                    DOMOV
                  </a>
                </li>
                <li className="relative">
                  <a
                    href="/galeria"
                    className="text-muted hover:text-muted-foreground"
                  >
                    GALÉRIA
                  </a>
                </li>

                <li className="relative">
                  <a
                    href="/kontakt"
                    className="text-muted hover:text-muted-foreground"
                  >
                    KONTAKT
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <a
          href="#"
          className="hidden lg:block transition-all border border-muted rounded-full px-4 py-2 text-muted hover:bg-muted hover:text-black"
        >
          KUPIŤ TERAZ
        </a>
        <button
          className="lg:hidden text-muted hover:text-muted-foreground z-50 fixed sm:right-12 right-5 top-[21.5px]"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>
      {isOpen && (
        <div
          className={`fixed inset-0  bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-8 z-40 transition-top duration-300`}
        >
          <a href="/" className="text-white text-2xl" onClick={toggleMenu}>
            DOMOV
          </a>
          <a
            href="/galeria"
            className="text-white text-2xl"
            onClick={toggleMenu}
          >
            GALÉRIA
          </a>
          <a href="/kontakt" className="text-white text-2xl" onClick={toggleMenu}>
            KONTAKT
          </a>
        </div>
      )}
    </div>
  );
}