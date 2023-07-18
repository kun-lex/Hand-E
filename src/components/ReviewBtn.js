import { Link } from "react-router-dom";

const ReviewBtn = () => {
    return(
        <div className="flex-col">
            <Link to='/write-review' >
                <button
                    style={{
                        position: "fixed",
                        bottom: "50px",
                        right: "50px",
                        height: "35px",
                        width: "130px",
                        backgroundColor: "#081E40",
                        color: "white",
                        borderRadius: "15px",
                    }}
                >Write a review</button>
            </Link>
        </div>
    )
}
export default ReviewBtn;