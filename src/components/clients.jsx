import React, { useState, useEffect } from 'react';

const Clients = () => {
    const slides = [
        [
            {
                img: 'https://themewagon.github.io/alien/images/client-img.png',
                title: 'DOEN AMRK',
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, asIt is a long established fact that a reader will be distracted.'
            },
            {
                img: 'https://themewagon.github.io/alien/images/client-img1.png',
                title: 'JOSP AMRK',
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.'
            }
        ],
        [
            {
                img: 'https://themewagon.github.io/alien/images/client-img.png',
                title: 'DOEN AMRK',
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, asIt is a long established fact that a reader will be distracted.'
            },
            {
                img: 'https://themewagon.github.io/alien/images/client-img1.png',
                title: 'JOSP AMRK',
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.'
            }
        ]
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <div className="container" id="client">
            <div className="review">
                <h1>Our Clients Review</h1>
                <h5>Content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as</h5>
            </div>
            <div className="carousel">
                <div className="slides" style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
                    {slides.map((slideGroup, index) => (
                        <div className="slideg" key={index}>
                            {slideGroup.map((slide, idx) => (
                                <div className="slideItem" key={idx}>
                                    <img src={slide.img} alt={`Slide ${index * 2 + idx + 1}`} />
                                    <div className="caption">
                                        <h2>{slide.title}</h2>
                                        <p>{slide.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <button className="prev" onClick={prevSlide}><i class="fa-solid fa-arrow-left"></i></button>
                <button className="next" onClick={nextSlide}><i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    );
};

export default Clients;
