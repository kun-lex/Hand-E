import { Link } from "react-router-dom";

const ReviewBtn = () => {
    return(
        <div>
            <Link to='/write-review' >
                <button
                    style={{
                        position: "fixed",
                        bottom: "40px",
                        right: "10px",
                        height: "35px",
                        width: "130px",
                        backgroundColor: "#1D5EBF",
                        color: "white",
                        borderRadius: "15px",
                    }}
                    className=" hidden lg:inline"
                >Write a review</button>
                <button
                    style={{
                        position: "fixed",
                        bottom: "40px",
                        right: "10px",
                        height: "40px",
                        width: "40px",
                        backgroundColor: "#1D5EBF",
                        color: "white",
                        borderRadius: "20px",
                        fontSize: "30px",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                    }}
                    className=" lg:hidden sm:inline flex-shrink-0"
                >+</button>
            </Link>
        </div>
    )
}
export default ReviewBtn;