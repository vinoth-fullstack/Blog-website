import React, { useState, useEffect } from 'react';


export default function Popular() {
    const [activeSet, setActiveSet] = useState(0);

    const imagearray = [
        {
            picture: 'https://themewagon.github.io/alien/images/img-1.png',
            title: 'MATERIALS',
            para: "words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't"
        },
        {
            picture: 'https://themewagon.github.io/alien/images/img-2.png',
            title: 'INDUSTRIALS',
            para: "words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't"
        },
        {
            picture: 'https://themewagon.github.io/alien/images/img-3.png',
            title: 'CONSUMER DISC',
            para: "words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't"
        },
        {
            picture: 'https://themewagon.github.io/alien/images/img-3.png',
            title: 'CONSUMER DISC',
            para: "words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't"
        },
        {
            picture: 'https://themewagon.github.io/alien/images/img-3.png',
            title: 'CONSUMER DISC',
            para: "words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't"
        },
        {
            picture: 'https://themewagon.github.io/alien/images/img-3.png',
            title: 'CONSUMER DISC',
            para: "words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't"
        },
        
    ];

    const imagesPerPage = 3;

    const prevSet = () => {
        setActiveSet(activeSet === 0 ? Math.ceil(imagearray.length / imagesPerPage) - 1 : activeSet - 1);
    };

    const nextSet = () => {
        setActiveSet(activeSet === Math.ceil(imagearray.length / imagesPerPage) - 1 ? 0 : activeSet + 1);
    };

    useEffect(() => {
        const interval = setInterval(nextSet, 3000); // 
        return () => clearInterval(interval);
    }, [activeSet]);

    return (
        <div className='container' id='pops'>
            <div className='category'>
                <h1>Popular category</h1>
            </div>
            <div className='cards'>
                <button className='arrow' onClick={prevSet}>{'<'}</button>
                <div className={`cardss ${activeSet === 0 ? '' : 'animate-enter'}`}>
                    {imagearray.slice(activeSet * imagesPerPage, (activeSet * imagesPerPage) + imagesPerPage).map((item, index) => (
                        <div className='card' id="mesho" key={index}>
                            <img src={item.picture} className="zoom" alt='product' />
                            <div className='card-body'>
                                <h5>{item.title}</h5>
                                <p>{item.para}</p>
                            </div>
                            <div className="button">
                <button className="btn">Read more</button>
              </div>
                        </div>
                    ))}
                </div>
                <button className='arrow' onClick={nextSet}>{'>'}</button>
            </div>
        </div>
    );
}
