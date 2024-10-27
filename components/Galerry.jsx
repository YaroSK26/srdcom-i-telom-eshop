"use client";
import React, { useState, useEffect } from "react";

const Gallery = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const maxScroll = 1000; // Znížil som maxScroll pre rýchlejšie zmenšovanie
  const initialScale = 3.3;
  const stopScrollAt = 1000;

  useEffect(() => {
    const handleScroll = () => {
      // Použijeme requestAnimationFrame pre plynulejšiu animáciu
      requestAnimationFrame(() => {
        setScrollPosition(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const getMainImageScale = () => {
    const threshold = 20;
    const effectiveScroll = Math.min(scrollPosition, stopScrollAt);

    if (effectiveScroll < threshold) {
      return initialScale;
    }

    // Upravená funkcia pre plynulejšie škálovanie
    const progress = (effectiveScroll - threshold) / (maxScroll - threshold);
    const easedProgress = 1 - Math.pow(1 - Math.min(progress, 1), 2); // Použijeme easing funkciu
    const scale = initialScale - (initialScale - 1) * easedProgress;

    return Math.max(1, scale);
  };

  const getColumnTransform = (direction) => {
    const threshold = 200;
    const effectiveScroll = Math.min(
      Math.max(0, scrollPosition - threshold),
      stopScrollAt - threshold
    );

    // Upravený výpočet pohybu pre plynulejší prechod
    const progress = effectiveScroll / (maxScroll - threshold);
    const easedProgress = 1 - Math.pow(1 - Math.min(progress, 1), 2);
    const movement = 400 * easedProgress;

    return direction === "up" ? -movement : movement;
  };

  const images = {
    left: ["/5.jpg", "/8.jpg", "/10.jpg"],
    center: ["/4.jpg", "/9.jpg", "/7.jpg"],
    right: ["/11.jpg", "/6.jpg", "/1.jpg"],
  };

  return (
    <div className="mt-28">
      <div className="relative min-h-[200vh]">
        <div className="sticky top-0 h-screen flex justify-center items-center overflow-hidden">
          <div className="relative flex gap-8">
            {/* Left column */}
            <div
              className="flex flex-col gap-8 transition-all duration-300 ease-out"
              style={{
                transform: `translateY(${getColumnTransform("up")}px)`,
              }}
            >
              {images.left.map((src, index) => (
                <div
                  key={`left-${index}`}
                  className="w-64 h-64 overflow-hidden rounded-lg"
                >
                  <img
                    src={src}
                    alt={`Image ${index}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            {/* Center column */}
            <div className="flex flex-col gap-8">
              <div className="w-64 h-64 overflow-hidden rounded-lg">
                <img
                  src={images.center[0]}
                  alt="Top center"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Main image */}
              <div
                className="w-64 h-64 overflow-hidden rounded-lg transition-all duration-300 ease-out"
                style={{
                  transform: `scale(${getMainImageScale()})`,
                  transformOrigin: "center center",
                  zIndex: scrollPosition < maxScroll / 2 ? 50 : 1,
                }}
              >
                <img
                  src={images.center[1]}
                  alt="Main center"
                  className={`w-full h-full object-cover transition-opacity duration-1000 ${
                    isLoaded ? "opacity-100" : "opacity-0"
                  } hover:scale-110 transition-transform duration-500`}
                />
              </div>

              <div className="w-64 h-64 overflow-hidden rounded-lg">
                <img
                  src={images.center[2]}
                  alt="Bottom center"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right column */}
            <div
              className="flex flex-col gap-8 transition-all duration-300 ease-out"
              style={{
                transform: `translateY(${getColumnTransform("down")}px)`,
              }}
            >
              {images.right.map((src, index) => (
                <div
                  key={`right-${index}`}
                  className="w-64 h-64 overflow-hidden rounded-lg"
                >
                  <img
                    src={src}
                    alt={`Image ${index}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pl-20 flex flex-col justify-center items-start w-full h-screen rounded-b-[80px] bg-red-500">
        <h2 className="sm:text-6xl text-3xl lg:w-[800px] md:w-[600px] sm:w-[500px] w-[300px] pb-5">
          Tam kde sa srdce a telo sa spájaju do jedného.
        </h2>
        <br />
        <a
          href="#"
          className="border border-muted rounded-full px-8 py-4 transition-colors text-muted hover:bg-muted hover:text-muted-foreground"
        >
          KÚPIŤ TERAZ
        </a>
      </div>
    </div>
  );
};

export default Gallery;
