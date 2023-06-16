// import React, { useState } from 'react'
import {Fade} from 'react-slideshow-image';
import join_us from './images/join-us pic.png';
import slide_2 from './images/slide 2.png';
import slide_3 from './images/slide 3.png';
import './App.css';
import 'react-slideshow-image/dist/styles.css'

const fadeImages =[
    {
        url : './images/join-us pic.png'
    },
    {
        url : './images/slide 2.png'
    },
    {
        url :'./images/slide 3.png'
    }
];

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    width : '25%',
    height : '400px',
    backgroundSize: 'cover'

}

const ImageSlider = () => {
    return(
        <div className="slide-container">
            <Fade>
                {fadeImages.map((fadeImage, index) => (
                    <div key={index} style={{...divStyle}}>
                        <img src={join_us} alt='join us'/>
                        <img src={slide_2} alt='join us'/>
                        <img src={slide_3} alt='join us'/>
                    </div>
                ))}
            </Fade>
        </div>
    )
}
export default ImageSlider;