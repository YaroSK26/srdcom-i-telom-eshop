"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, ChevronDown, ChevronUp } from "lucide-react";
import { withSwal } from "react-sweetalert2";
import { Toaster } from "react-hot-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Banner from "@/components/Banner";
import Model from "@/components/Model";

const Contact = ({ swal }) => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_81tw9xw",
        "template_m37okw1",
        {
          from_name: form.name,
          to_name: "Jaroslav",
          from_email: form.email,
          to_email: "jaroba0@gmail.com",
          message: form.message,
        },
        "ao9Pnvt-EA8-h9gBU"
      )
      .then(
        () => {
          setLoading(false);
          swal.fire({
            title: "Odoslané!",
            text: "Ďakujeme za správu, čoskoro sa Vám ozveme.",
            icon: "success",
            confirmButtonText: "OK",
          });
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error("Nastala chyba, skúste to znova.");
        }
      );
  };

  const faqItems = [
    {
      question: "Prečo nepredávate produkty cez eshop?",
      answer: "Tento projekt je ešte len v začiatkoch a nemáme vytvorenú firmu a preto zatiaľ vedia zakazníci produkty zakúpiť len cez instagram alebo osobne.",
    },
    {
      question: "What information should I include in my message?",
      answer:
        "Please include as much detail as possible about your inquiry to help us assist you better.",
    },
    {
      question: "Do you offer emergency support?",
      answer:
        "Yes, for urgent matters, we have a priority support system in place.",
    },
  ];

  return (
    <div>
      <div className="w-full max-w-6xl mx-auto px-4 py-12 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row gap-8"
        >
          {/* Form Section */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Spojme sa </h2>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6 bg-white p-8 rounded-lg shadow-lg"
            >
              {/* Name Input */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="peer w-full px-4 py-3 text-black border rounded-lg outline-none transition-all duration-300 focus:border-black"
                />
                <label
                  htmlFor="name"
                  className={`absolute left-4 bg-white px-2 text-sm text-gray-500 transition-all duration-300 
                    ${form.name ? "-top-2.5" : "top-3"} 
                    peer-focus:-top-2.5 peer-focus:text-sm`}
                >
                  Tvoje meno
                </label>
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="peer w-full px-4 py-3 text-black border rounded-lg outline-none transition-all duration-300 focus:border-black"
                />
                <label
                  htmlFor="email"
                  className={`absolute left-4 bg-white px-2 text-sm text-gray-500 transition-all duration-300 
                    ${form.email ? "-top-2.5" : "top-3"} 
                    peer-focus:-top-2.5 peer-focus:text-sm`}
                >
                  Tvoj email
                </label>
              </div>

              {/* Message Input */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="peer w-full px-4 py-3 text-black border rounded-lg outline-none transition-all duration-300 focus:border-black resize-none"
                />
                <label
                  htmlFor="message"
                  className={`absolute left-4 bg-white px-2 text-sm text-gray-500 transition-all duration-300 
                    ${form.message ? "-top-2.5" : "top-3"} 
                    peer-focus:-top-2.5 peer-focus:text-sm`}
                >
                  Tvoja správa
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 transition-all 
                       hover:border-2 hover:border-black border-white border-2 rounded-full 
                       px-6 py-4 text-white bg-black hover:bg-transparent hover:text-black"
              >
                <Mail className="w-4 h-4 mb-1" />
                {loading ? "Posiela sa..." : "Odoslať"}
              </button>
            </form>
          </div>

          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full mt-[60px] h-[425px] bg-gray-100 rounded-lg overflow-hidden">
              <Model></Model>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold mb-6">Časté otázky</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <Toaster position="top-right" reverseOrder={false} />
      </div>

      <Banner />
    </div>
  );
};

export default withSwal(Contact);
