// const handleLeftArrow=()=>{
    //     if(step===1){
    //         setStep(3);
    //     }
    //     else{
    //         setStep(step-1);
    //     }
    // }
    // const handleRightArrow=()=>{
    //     if(step === 3 ){
    //         setStep(1);
    //     }
    //     else{
    //         setStep(step+1);
    //     }
    // }
    // const goToSlide1=()=>{
    //     setStep(1);
    // }
    // const goToSlide2=()=>{
    //     setStep(2);
    // }
    // const goToSlide3=()=>{
    //     setStep(3);
    // }
    // var slider = document.getElementById("slider")
    // var sliderWidth = slider.offsetWidth;
    // var slideList = document.getElementById("slideWrap");
    // might not need this
    // var items = slideList.querySelector("li").lenght;
    // var prev = document.getElementById("prev")
    // var next = document.getElementById("next");

    // window.addEventListener('resize', function() {
    //     ImageSlider.offsetWidth;
    // });
    const handlePrevSlide =() =>{
        if(step > 1) {
            handlePrevSlide.step = step - 2;
            handlePrevSlide.style.left = "-" + step + "px";
            step++;
        }
    
        else if (step = 1) {
            step =  1;
            step.style.left = "-" + step  + "px";
            step++;
        }
        };
        const hanldeNextSlide = () => {
        if(step < 4) {
            hanldeNextSlide.style.left = "0px";
            step = 1;
        }
        }
        setInterval(function() {
            hanldeNextSlide()
        }, 5000);