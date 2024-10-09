import React, { useState, useEffect } from 'react';
import trabajosstyles from './trabajosstyles.css';
import sendero from './458919768_1857031854785040_3852557599546310433_n.jpg';
import img1sl from './pdra.jpg';
import imgsl2 from './pdra2.jpg';
import sendero2 from './459083360_1299359958144207_7686728732304278001_n.jpg';


const Trabajosbox = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [ img1sl, imgsl2, sendero, sendero2]; // Array con las imágenes

    // Cambiar el índice de la imagen
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Si quisieras agregar un slider automático que cambie cada ciertos segundos, podrías usar useEffect
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Cambiar cada 3 segundos
        return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonta
    }, [currentIndex]);

    return (
        <section className="slider-section">
            <h1 id='trabajos'>Nuestros Trabajos </h1>
            <div className="slider-container">
                <div
                    className="slider"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Slide ${index}`} />
                    ))}
                </div>
                <button id="prev" className="slider-btn prev-btn" onClick={prevSlide}>
                    &#10094;
                </button>
                <button id="next" className="slider-btn next-btn" onClick={nextSlide}>
                    &#10095;
                </button>
            </div>
        </section>
    );
};

export default Trabajosbox;