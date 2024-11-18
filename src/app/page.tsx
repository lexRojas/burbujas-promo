import Image from "next/image";
import burbujas from "../../public/burbujas-logo.png"

import whatsap from "../../public/whatsapp.png"
import instagram from "../../public/instagram.png"
import facebook from "../../public/facebook.png"
import Style from "./Text.module.css"
import img1 from "../../public/stock/image1.jpg"


import { Sour_Gummy, Oswald } from 'next/font/google';
import ImageSliderReact from "../../components/ImageSliderReact";




const alice = Sour_Gummy(
  {
    weight: '500',
    subsets: ['latin'],
    style: 'normal',

  }

)

const oswald = Oswald(
  {
    weight: '500',
    subsets: ['latin'],
    style: 'normal',

  }

)

export default function Home() {

  console.log(img1.src)

  const imageLinks = [
    { id: 0, src: "/stock/image1.jpg", link: 'https://example.com/1' },
    { id: 1, src: "/stock/image2.jpg", link: 'https://example.com/1' },
    { id: 2, src: "/stock/image3.jpg", link: 'https://example.com/1' },
    { id: 3, src: "/stock/image4.jpg", link: 'https://example.com/1' },




  ];

  return (

    <div className="bubbles-container">

      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>

      <div className="grid grid-rows-[auto_auto_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-6  sm:p-20 font-[family-name:var(--font-geist-sans)]">

        <div className="row-start-1 ">
          <Image
            src={burbujas}
            alt="Burrbujas"
            style={{ width: 'clamp(100px,500px,450px)' }}
            className="logo-luminoso"
          >
          </Image>
          <div className={Style.textcontainer} >
            <p className={` ${oswald.className} ${Style.textmove}`}  >¡Los momentos alegres comienzan aquí!</p>
          </div>

        </div>
        <div className="bar flex row-start-2 bg-gray-100 w-full justify-center p-1">
          <ul className={` ${alice.className} flex flex-row space-x-2  md:space-x-5  md:text-xl `}>
            <li>JUGUETERIA</li>
            <li>ELECTRÓNICOS</li>
            <li>LIBRERÍA</li>
          </ul>


        </div>
        <main className="flex flex-col gap-8 row-start-3 items-center  ">

          <div className="flex flex-row">

            <ImageSliderReact images={imageLinks} />




          </div>


          <div className="flex flex-col gap-3 md:flex-row ">
            <div className="flex items-center 
                          justify-center  
                          p-5
                          bg-button-1 ">

              <p className="font-extrabold   text-xl">Inscribirse </p>
            </div>
            <div className="flex items-center 
                          justify-center  
                          p-5
                          bg-button-2 ">

              <p className="font-extrabold   text-xl">Ver Puntos </p>
            </div>
            <div className="flex items-center 
                          justify-center  
                          p-5
                          bg-button-3 ">

              <p className="font-extrabold   text-xl">Reglamento </p>
            </div>

          </div>

        </main>
        <footer className="row-start-4 flex  flex-row  pt-6 gap-6 flex-wrap items-center justify-center">
          <div className="flex flex-shrink items-center gap-3">

            <Image className="img-luminosa" alt="Whatsap" src={whatsap}  style={{width:'clamp(10px,25px,25px)'}} ></Image>
          <span className="text-black hover:text-blue-800" style={{fontSize:'clamp(0.5rem, 2.5vw, 2rem)'}}> Whatsap </span>
      </div>
      
      <div className="flex items-center gap-3">
        <Image className="img-luminosa" alt="Whatsap" src={facebook} style={{width:'clamp(10px,25px,25px)'}} ></Image>
        <span className="text-black hover:text-blue-800" style={{fontSize:'clamp(0.5rem, 2.5vw, 2rem)'}}> Facebook </span>
      </div>
      <div className="flex items-center gap-3">
        <Image className="img-luminosa" alt="Whatsap" src={instagram} style={{width:'clamp(10px,25px,25px)'}} ></Image>
        <span className="text-black hover:text-blue-800"  style={{fontSize:'clamp(0.5rem, 2.5vw, 2rem)'}} > Instagram </span>
      </div>


    </footer >
      </div >
    </div >
  );
}
