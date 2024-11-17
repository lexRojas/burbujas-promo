import Image from "next/image";
import burbujas from "../../public/burbujas-logo.png"

import whatsap from "../../public/whatsapp.png"
import instagram from "../../public/instagram.png"
import facebook from "../../public/facebook.png"


import { Sour_Gummy } from 'next/font/google';

const alice = Sour_Gummy(
  {
    weight: '500',
    subsets: ['latin'],
    style: 'normal',

  }

)


export default function Home() {




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
          >
          </Image>
        </div>
        <div className="bar flex row-start-2 bg-gray-100 w-full justify-center p-1">
          <ul className={` ${alice.className} flex flex-row space-x-2  md:space-x-5  md:text-xl `}>
            <li>JUGUETERIA</li>
            <li>ELECTRÓNICOS</li>
            <li>LIBRERÍA</li>
          </ul>


        </div>
        <main className="flex flex-col gap-8 row-start-3 items-center sm:items-start">

          <div className="flex items-center 
                          justify-center 
                          size-64 ring-4 
                          ring-yellow-400 
                          border-red-950  
                          border-4  
                          rounded-3xl 
                          bg-red-500 ">

            <p className="font-extrabold   text-xl">Ver puntos </p>
          </div>



        </main>
        <footer className="row-start-4 flex  flex-row  gap-6 flex-wrap items-center justify-center">
          <div className="flex items-center gap-3">
            <Image className="img-luminosa" alt="Whatsap" src={whatsap} width={30} ></Image>
            <span className="text-white hover:text-yellow-300"> Whatsap </span></div>
          <div className="flex items-center gap-3">
            <Image className="img-luminosa" alt="Whatsap" src={facebook} width={30} ></Image>
            <span className="text-white hover:text-yellow-300"> Facebook </span> </div>
          <div className="flex items-center gap-3">
            <Image className="img-luminosa" alt="Whatsap" src={instagram} width={30} ></Image>
            <span className="text-white hover:text-yellow-300"> Instagram </span> </div>


        </footer>
      </div>
    </div>
  );
}
