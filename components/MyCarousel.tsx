'use client'

import Image from "next/image";
import { Carousel } from 'flowbite-react';



interface Image {
    id: number;
    src: string;
    link: string;
}

interface Props {
    images: Image[];
}


export default function MyCarousel({ images }: Props) {




    return (
        <div className="contenedor-carousel relative " >
            
            <Carousel >

                {images.map((item) => (
                    <Image key={item.id} src={item.src} alt={item.link} width={500} height={500} />
                ))}

            </Carousel>

        </div>
    )
}