"use client";

import { useState } from "react";
import Image from "next/image";
import { Undo2 } from "lucide-react";

const products = [
  {
    name: "Vitamín B",
    color: "bg-white",
    number: "1",
    price: 20,
    description: "Description da da d",
    frontSrc: "/products/vitaminB",
    backSrc: "/products/vitaminB-back",
  },
  {
    name: "Faith over fear",
    color: "bg-black",
    number: "2",
    price: 20,
    description: "Description adad ad ",
    frontSrc: "/products/faith-over-fear",
    backSrc: "/products/black-back",
  },
  {
    name: "On sa stará",
    color: "bg-black",
    number: "3",
    price: 20,
    description: "Descriptionda  da ",
    frontSrc: "/products/on-sa-stara",
    backSrc: "/products/black-back",
  },
  {
    name: "Must bench it",
    color: "bg-black",
    number: "4",
    price: 20,
    description: "Description ada ",
    frontSrc: "/products/must-bench-it",
    backSrc: "/products/black-back",
  },
];

export default function Component() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [showBack, setShowBack] = useState(false);

  const toggleView = () => {
    setShowBack(!showBack);
  };

  return (
    <div>
      <div className="min-h-screen bg-white">
        <nav>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-8 py-4">
              {products.map((product, index) => (
                <div key={index} className="flex flex-col items-center">
                  <button
                    onClick={() => {
                      setSelectedProduct(product);
                      setShowBack(false);
                    }}
                    className={`${product.color} border-2 ${
                      product.number == "1" ? "text-black" : "text-white"
                    } border-black rounded-full w-12 h-12 flex items-center justify-center transition-transform hover:scale-110 focus:outline-none mb-2`}
                  >
                    {product.number}
                  </button>
                  <div
                    className={`h-0.5 w-6 transition-all duration-300 ${
                      selectedProduct.number === product.number
                        ? "bg-black scale-100"
                        : "bg-transparent scale-0"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] group">
              <Image
                src={`${
                  showBack ? selectedProduct.backSrc : selectedProduct.frontSrc
                }.png`}
                alt={`${selectedProduct.name} tričko ${
                  showBack ? "zadná" : "predná"
                } strana`}
                fill
                className="object-contain rounded-xl"
              />
              <button
                onClick={toggleView}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 group-hover:opacity-100 opacity-70"
                aria-label="Otočiť tričko"
              >
                <Undo2 className="w-6 h-6 text-black" />
              </button>
            </div>

            <div className="space-y-6 text-black">
              <div>
                <h2 className="text-sm uppercase tracking-wide">Tričko</h2>
                <h1 className="text-6xl font-bold mt-2">
                  {selectedProduct.name}
                </h1>
              </div>

              <p className="text-lg">{selectedProduct.description}</p>

              <div className="text-5xl font-bold">${selectedProduct.price}</div>
              <br />
              <a
                href="#"
                className="transition-all hover:border-2 hover:border-black rounded-full px-6 py-4 text-white bg-black hover:bg-transparent hover:text-black"
              >
                TOTO TRIČKO CHCEM
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
