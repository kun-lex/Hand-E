import join_us from './images/join-us pic.png';
import slide_2 from './images/slide 2.png';
import slide_3 from './images/slide 3.png';
import './App.css';
import HeroSlider, {Slide} from 'hero-slider'

const ImageSlider = () => {
    // const responsiveSlider = function() {
    //     var slider = document.getElementById("slider")
    //     var sliderWidth = slider.offsetWidth;
    //     var slideList = document.getElementById("slideWrap");
    //     var count = 1;
    //     // might not need this
    //     var items = slideList.querySelector("li").lenght;
    //     var prev = document.getElementById("prev")
    //     var next = document.getElementById("next");

    //     window.addEventListener('resize', function() {
    //     sliderWidth = slider.offsetWidth;
    //     });
    //     var prevSlide = function (){
    //     if(count > 1) {
    //         count = count - 2;
    //         slideList.style.left = "-" + count * sliderWidth + "px";
    //         count++;
    //     }

    //     else if (count = 1) {
    //         count = items - 1;
    //         slideList.style.left = "-" + count * sliderWidth + "px";
    //         count++;
    //     }
    //     };
    //     var nextSlide = function (){
    //     if(count < items) {
    //         slideList.style.left = "0px";
    //         count = 1;
    //     }
    //     }
    //     next.addEventListener("click", function() {
    //     nextSlide();
    //     });
    //     prev.addEventListener("click", function() {
    //     prevSlide();
    //     });
    //     setInterval(function() {
    //     nextSlide()
    //     }, 5000);
    //     window.onload = function() {
    //     responsiveSlider();
    //     }
    // }
    
    return(
        <HeroSlider
            slidingAnimation = "left_to_right"
            orientation = "horizontal"
            initialSlide = {1}
            onBeforeChange = {(previousSlide, nextSlide) => console.log("onBeforeChange", previousSlide, nextSlide) }
            onChange = {nextSlide => console.log("onChange", nextSlide)}
            onAfterChange = {nextSlide => console.log ("onAfterChange", nextSlide) }
            settings={{
                slidingDuration: 250,
                slidingDelay: 100,
                shouldAutoplay: true,
                shouldDisplayButtons: false,
                autoplayDuration: 5000,
            }}
        >
            <Slide 
            background = {{
                backgroundImage: {join_us}
            }} />
            <Slide 
            background = {{
                backgroundImage: {slide_2}
            }} />
            <Slide 
            background = {{
                backgroundImage: {slide_3}
            }} />
        </HeroSlider>
    )
}
export default ImageSlider;