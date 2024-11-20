import React, { useState, useRef, useEffect } from "react";
import "./animacionburbuja.css"; // Asegúrate de incluir este archivo


interface Props {
    puntos: number;
}



const BubbleAnimation = (props: Props) => {

    const [number, setNumber] = useState(0)

    const bubbleElement = useRef<HTMLDivElement | null>(null)
    let count = 0;
    const { puntos } = props;

    let totalPuntos = 0;

    let incremento = puntos / 150;

    useEffect(() => {

        let interval = setInterval(() => {
            if (count <= 150) { // Número máximo que se incrementa

                setNumber(count)

                totalPuntos = totalPuntos + incremento

                setNumber(Math.floor(totalPuntos))

                // Ajustar el tamaño de la burbuja según el valor del contador
                let size = 50 + count; // Ajusta el multiplicador para cambiar la escala



                if (bubbleElement) {

                    bubbleElement.current!.style.width = size + 'px';
                    bubbleElement.current!.style.height = size + 'px';
                    bubbleElement.current!.style.fontSize = (10 + count * 0.35) + 'px'; // Ajusta el tamaño del texto

                    count++;
                }
            } else {
                clearInterval(interval);
            }
        }, 50); // Velocidad de incremento


    }, [])

    return (
        <div className="bubble-animation-container py-3">
            <div ref={bubbleElement} className="bubble-animation ">
                <span className="number">{number}</span>
            </div>
        </div>
    );
};

export default BubbleAnimation;
