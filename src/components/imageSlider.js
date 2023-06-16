import React, { useState } from 'react'
import join_us from './images/join-us pic.png';
import slide_2 from './images/slide 2.png';
import slide_3 from './images/slide 3.png';
import './App.css';

{/* <div class="dropdown-b">
<button onClick={myFunction} class="dropbtn">Category <img src={chevron}  alt="chevron" /></button>
<div id="myDropdown" class="dropdown-content">
    <input type="text" placeholder="Search Anything..." id="myInput" onkeyup={filterFunction} />
    <a href="#about">Home Services</a>
    <a href="#base">Auto Services</a>
    <a href="#blog">Blog</a>
    <a href="#contact">Contact</a>
    <a href="#custom">Custom</a>
    <a href="#support">Support</a>
    <a href="#tools">Tools</a>
</div>
</div> */}

const ImageSlider = () => {
    const [ slide, setItem] = useState ({
        
    })
        // var slider = document.getElementById("slider")
        // var sliderWidth = slider.offsetWidth;
        // var slideList = document.getElementById("slideWrap");
        var count = 1;
        // // might not need this
        // var items = slideList.querySelector("li").lenght;
        // var prev = document.getElementById("prev")
        // var next = document.getElementById("next");

        // window.addEventListener('resize', function() {
        //     ImageSlider.offsetWidth;
        // });
        // var prevSlide = function (){
        // if(count > 1) {
        //     prevSlide.count = count - 2;
        //     prevSlide.style.left = "-" + count + "px";
        //     count++;
        // }

        // else if (count = 1) {
        //     count =  1;
        //     count.style.left = "-" + count  + "px";
        //     count++;
        // }
        // else prevSlide();
        // };
        // var nextSlide = function (){
        // if(count < 4) {
        //     nextSlide.style.left = "0px";
        //     count = 1;
        // }
        // }
        // setInterval(function() {
        // nextSlide()
        // }, 5000);           
    
    return(
        <div id="slider">
            <div id="slideWrap">
                <ul>
                    <li> <img className='w-50 h-50' src={join_us} alt='join us' /> </li>
                    <li> <img className='w-50 h-50' src={slide_2} alt='join us' /> </li>
                    <li> <img className='w-50 h-50' src={slide_3} alt='join us' /> </li>
                </ul>
            </div>
        </div>
    )
}
export default ImageSlider;