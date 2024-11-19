import type { Metadata } from "next";
import "./globals.css";

import Image from "next/image";
import burbujas from "../../public/burbujas-logo.png"

import whatsap from "../../public/whatsapp.png"
import instagram from "../../public/instagram.png"
import facebook from "../../public/facebook.png"
import Style from "./Text.module.css"
import { DarkThemeToggle } from "flowbite-react";


import { Oswald, Roboto_Condensed } from 'next/font/google';

const oswald = Oswald(
  {
    weight: '500',
    subsets: ['latin'],
    style: 'normal',

  }
)

const roboto_condensed = Roboto_Condensed({
  weight: '500',
  subsets: ['latin'],
  style: 'normal'

})


export const metadata: Metadata = {
  title: "Mundo Burbujas",
  description: "Página promocional...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" antialiased" >
        {/* <div className="bubbles-container">

          <div className="bubble"/>
          <div className="bubble"/>
          <div className="bubble"/>
          <div className="bubble"/>
          <div className="bubble"/> */}


          <div className="grid grid-rows-[auto_auto_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-6  sm:p-20 ">

            <div className="row-start-1 ">
              <Image
                src={burbujas}
                alt="Burrbujas"
                style={{ width: 'clamp(100px,600px,600px)' }}
                className="logo-luminoso"
              >
              </Image>
              <div className={Style.textcontainer} >
                <p className={` ${oswald.className} ${Style.textmove}`}  >¡Los momentos alegres comienzan aquí!</p>
              </div>

            </div>
            <div className="bar flex row-start-2 w-full justify-center align-top ">
              <ul className={` ${roboto_condensed.className} flex flex-row  space-x-2  md:space-x-5  md:text-xl `}>
                <li className="flex">JUGUETERIA</li>
                <li>ELECTRÓNICOS</li>
                <li>LIBRERÍA</li>
              </ul>


            </div>
            <main className="flex flex-col gap-8 row-start-3 items-center w-full  ">

              {children}

            </main>
            <footer className="row-start-4 flex  flex-row  pt-6 gap-6 flex-wrap items-center justify-center">
              <div className="flex flex-shrink items-center gap-3">

                <Image className="img-luminosa" alt="Whatsap" src={whatsap} style={{ width: 'clamp(10px,25px,25px)' }} ></Image>
                <span className={`${roboto_condensed.className} text-black hover:text-blue-800`} style={{ fontSize: 'clamp(0.5rem, 2.5vw, 2rem)' }}> Whatsap </span>
              </div>

              <div className="flex items-center gap-3">
                <Image className="img-luminosa" alt="Whatsap" src={facebook} style={{ width: 'clamp(10px,25px,25px)' }} ></Image>
                <span className={`${roboto_condensed.className} text-black hover:text-blue-800`} style={{ fontSize: 'clamp(0.5rem, 2.5vw, 2rem)' }}> Facebook </span>
              </div>
              <div className="flex items-center gap-3">
                <Image className="img-luminosa" alt="Whatsap" src={instagram} style={{ width: 'clamp(10px,25px,25px)' }} ></Image>
                <span className={`${roboto_condensed.className} text-black hover:text-blue-800`} style={{ fontSize: 'clamp(0.5rem, 2.5vw, 2rem)' }} > Instagram </span>
              </div>
              <DarkThemeToggle />

            </footer >
          </div >


        {/* </div> */}
      </body>
    </html>
  );
}
