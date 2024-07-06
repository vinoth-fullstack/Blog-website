import React, { useState } from 'react'

export default function Blog() {
    const [mainimage, setimage] = useState(0);

    const images = [
        {
            picture: 'https://themewagon.github.io/alien/images/blog-img1.png',
            title: 'Undoubtable source',
            para: " looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, contenish"
        },
        {
            picture: 'https://themewagon.github.io/alien/images/blog-img2.png',
            title: 'Undoubtable source',
            para: "looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, contenish"
        },
        {
            picture: 'https://themewagon.github.io/alien/images/blog-img3.png',
            title: 'Undoubtable source',
            para: "looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, contenish"
        },
        
        
    ];


  return (
    <div className='container' id="bhead">
        <div className='blogs'>
            <h3><center>LATEST BLOGS</center></h3>
        </div>
        <div className='show'>
                
                <div className={`rows ${mainimage === 0 ? '' : 'animate-enter'}`}>
                    {images.map((item, index) => (
                        <div className='card' id="segment" key={index}>
                            <img src={item.picture} className="zooms" alt='product' style={{height:"350px", width:"auto"}}/>
                            <div className='card-bodys'>
                                <h5>{item.title}</h5>
                                <p>{item.para}</p>
                            </div>
                            <div className="button" id="button1">
                <button className="btn" id='btns'>Read more</button>
              </div>
                        </div>
                    ))}
                </div>
               
            </div>
    </div>
  )
}
