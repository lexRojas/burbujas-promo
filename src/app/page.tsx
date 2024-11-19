

import Link from "next/link";
import MyCarousel from "../../components/MyCarousel";

export default function Home() {

  const imageLinks = [
    { id: 0, src: "/stock/image1.jpg", link: 'https://example.com/1' },
    { id: 1, src: "/stock/image2.jpg", link: 'https://example.com/1' },
    { id: 2, src: "/stock/image3.jpg", link: 'https://example.com/1' },
    { id: 3, src: "/stock/image4.jpg", link: 'https://example.com/1' },
  ];

  return (
    <>
      <MyCarousel images={imageLinks} />

      <div className="flex flex-col gap-3 md:flex-row ">
        <div className="flex items-center 
                          justify-center  
                          p-5
                          main-button-1 ">

          <Link href="/signup">
            <p className="font-extrabold text-xl">Inscribirse </p>
          </Link>


        </div>
        <div className="flex items-center 
                          justify-center  
                          p-5
                          main-button-2 ">

          <p className="font-extrabold   text-xl">Ver Puntos </p>
        </div>
        <div className="flex items-center 
                          justify-center  
                          p-5
                          main-button-3 ">

          <p className="font-extrabold   text-xl">Reglamento </p>
        </div>

      </div>

    </>
  );
}
