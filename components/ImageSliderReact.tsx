'use client'

import React, { useEffect, useRef, useState } from 'react'
import './ImageSliderReact.css'
import Image from 'next/image';


interface Image {
    id: number;
    src: string;
    link: string;
}

interface Props {
    images: Image[];
}


const ImageSliderReact= ({images}:Props) => {
    
  const listRef = useRef<HTMLUListElement | null>  (null);
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const listNode= listRef.current;
    const imgNode = listNode!.querySelectorAll<HTMLImageElement >("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth",
        inline:"start"
      });
    }

  }, [currentIndex]);
  

  // useEffect(() => {
  //   const interval = setInterval(()=>{
  //     setCurrentIndex(curr => {
  //       const isLastSlide = currentIndex === images.length-1;
  //       return isLastSlide ? 0 : curr + 1;
  //     })

  //   },3000)
  
  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [])
  


  const scrollToImage = (direction:string) => {
    if (direction === 'prev') {
      setCurrentIndex(curr => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? 0 : curr - 1;
      })
    } else {
      setCurrentIndex(curr => {
        const isLastSlide = currentIndex === images.length-1;
        return isLastSlide ? 0 : curr + 1;
      })
    }
  }

  const goToSlide = (slideIndex:number) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <div className="main-container">
      <div className="slider-container">
        <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
        <div className='rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
        <div className="container-images slider">
          <ul ref={listRef}>
            {
              images.map((item) => {
                return <li key={item.id}>
                  <Image className='image' alt='image' src={item.src} width={250} height={250}   />
                </li>
              })
            }
          </ul>
        </div>
        <div className="dots-container">
          {
            images.map((_, idx) => (
              <div key={idx}
                className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}
                onClick={() => goToSlide(idx)}>
                &#9865;
              </div>))
          }
        </div>
      </div>
    </div >
  )
}

export default ImageSliderReact