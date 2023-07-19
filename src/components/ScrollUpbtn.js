import { useState,useEffect } from "react";

const ScrollUpBtn = () => {
    const [ backToTopButton, setBackToTopButton ] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true);
            } else {
                setBackToTopButton(false);
            }
        })
    }, [])
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return(
        <div>
            {
                backToTopButton &&
                (<button
                style={{
                    position: "fixed",
                    bottom: "-1px",
                    right: "50px",
                    height: "40px",
                    width: "40px",
                    backgroundColor: "#081E40",
                    color: "white",
                    borderRadius: "50px",
                    fontSize: "30px",
                    alignItems: "center",
                }}
                onClick={scrollUp}
            >^</button>)}
        </div>
    )
}
export default ScrollUpBtn;