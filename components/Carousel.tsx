'use client'

import React, { useState} from 'react';
import styles from './Carousel.module.css';
import Image from 'next/image';

interface Image {
    src: string;
    link: string;
}

interface CarouselProps {
    images: Image[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Desplazamiento automático cada segundo
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         nextImage();
    //         console.log(currentIndex)
    //     }, 6000);

    //     return () => clearInterval(interval); // Limpieza del intervalo al desmontar
    // }, );

    const nextImage = () => {
        setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((currentIndex) =>
            currentIndex === 0 ? images.length - 1 : currentIndex - 1
        );
    };

    return (
        <div className={styles.carousel}>
            <button className={styles.button} onClick={prevImage}>
                &#8249;
            </button>
            <div className={styles.carouselInner}>
                {images.map((image, index) => (
                    <a
                        key={index}
                        href={image.link}
                        className={styles.imageLink}
                        style={{
                            transform: `translateX(-${currentIndex * 200}%)`,
                            transition: 'transform 5s ease-in-out',
                        }}
                    >
                        

                        <Image src={image.src} alt={`Slide ${index}`} className={styles.image}  width={200} height={200}/>
                    </a>
                ))}
            </div>
            <button className={styles.button} onClick={nextImage}>
                &#8250;
            </button>
        </div>
    );
};

export default Carousel;
