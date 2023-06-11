import join_us from './images/join-us pic.png';
import slide_2 from './images/slide 2.png';
import slide_3 from './images/slide 3.png';
import './App.css';


const ImageSlider = () => {
    const responsiveSlider = () => {
        var slider = document.getElementById("slider")
        var sliderWidth = slider.offsetWidth;
        var slideList = document.getElementById("slideWrap");
        var count = 1;
        // might not need this
        var items = slideList.querySelector("li").lenght;
        var prev = document.getElementById("prev")
        var next = document.getElementById("next");

        window.addEventListener('resize', function() {
        sliderWidth = slider.offsetWidth;
        });
        var prevSlide = function (){
        if(count > 1) {
            count = count - 2;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }

        else if (count = 1) {
            count = items - 1;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
        else prevSlide();
        };
        var nextSlide = function (){
        if(count < items) {
            slideList.style.left = "0px";
            count = 1;
        }
        }
        next.addEventListener("click", function() {
        nextSlide();
        });
        prev.addEventListener("click", function() {
        prevSlide();
        });
        setInterval(function() {
        nextSlide()
        }, 5000);
        window.onload = function() {
            responsiveSlider();  
        }            
    }
    
    return(
        <div id="slider">
            <div id="slideWrap">
                <ul>
                    <li> <img src={join_us} alt='join us' /> </li>
                    <li> <img src={slide_2} alt='join us' /> </li>
                    <li> <img src={slide_3} alt='join us' /> </li>
                </ul>
                {/* <a id="prev" href="#">&#8810;</a>
                <a id="next" href="#">&#8811;</a> */}
            </div>
        </div>
    )
}
export default ImageSlider;