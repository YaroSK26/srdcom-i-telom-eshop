import React from 'react'

const Banner = () => {
  return (
    <div className="pl-20 flex flex-col justify-center items-start w-full h-screen rounded-b-[80px] bg-white text-black">
      <h2 className="sm:text-6xl text-3xl lg:w-[800px] md:w-[600px] sm:w-[500px] w-[300px] pb-5">
        Tam kde sa srdce a telo sa spájaju do jedného.
      </h2>
      <br />
      <a
        href="#products"
        className="border border-black hover:bg-black hover:text-white rounded-full px-8 py-4 transition-all  "
      >
        CHCEM VIDIEŤ VIAC
      </a>
    </div>
  );
}

export default Banner
