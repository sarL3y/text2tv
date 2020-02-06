import React, { useState } from 'react';

import '../sass/Carousel.scss';

const Carousel = (props) => {
    const [slides, setSlides] = useState([
        {
            content: 'Romney, who was the GOP presidential nominee in 2012, has been more outspoken against Trump than many other Republican senators have been. He said in October that Trump’s “brazen and unprecedented appeal to China and to Ukraine to investigate Joe Biden is wrong and appalling.” Since then, he has continued to express concerns about the allegations against the president.',
            imageUrl: 'https://images.unsplash.com/photo-1580130379624-3a069adbffc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1568&q=80'
        },
        {
            content: "Corrupting an election process in a democratic republic is about as abusive and egregious an act against the Constitution — and one’s oath — that I can imagine. It’s what autocrats do.",
            imageUrl: 'https://images.unsplash.com/photo-1521716250348-c4ae4ff1df43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1182&q=80'
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1567965606933-c46e07393d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80'
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1580129893797-a7e6d5b1a6ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80'
        }
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);
    
    const handlePrevSlide = () => {
        const shouldReset = currentIndex === 0;
        const index = shouldReset ? slides.length - 1 : currentIndex - 1;

        setCurrentIndex(index);
    }

    const handleNextSlide = () => {
        const shouldReset = currentIndex === slides.length - 1;
        const index = shouldReset ? 0 : currentIndex + 1;
        
        setCurrentIndex(index);
    }

    const activeSlides = slides.slice(currentIndex, currentIndex + 5);

    const slidesToDisplay = activeSlides.length < 5
        ? [...activeSlides, ...slides.slice(0, 5 - activeSlides.length)]
        : activeSlides;
    
    return (
        <div className="carousel-layout">
            <div className="carousel">
                {slidesToDisplay.map((slide, index) => (
                    <div className={`slide`} key={index}>
                        {slide.imageUrl ? (<img src={slide.imageUrl} alt="" />) : (null)}
                        {slide.content ? (<p className="slide-content">"{slide.content}"</p>) : (null)}
                    </div>
                ))}
            </div>

            <div className="carousel-nav">
                <button onClick={handlePrevSlide}>{"<"}</button>
                <button onClick={handleNextSlide}>{">"}</button>
            </div>
        </div>
    )
}

export default Carousel;

