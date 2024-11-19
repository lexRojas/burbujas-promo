'use client'

import Image from "next/image";
import { Carousel, Datepicker } from 'flowbite-react';



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
        <div className="contenedor-carousel" >
            
            <Carousel>

                {images.map((item) => (
                    <img key={item.id} src={item.src} alt={item.link} />
                ))}

            </Carousel>

        </div>
    )
}