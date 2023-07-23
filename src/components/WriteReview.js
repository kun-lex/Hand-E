import SelectCategory from './SelectCategory';
import  ReviewLogo from './icons/undraw_for_review_eqxk.svg';
import NavbarOne from './navbarOne';
import StarRating from './starrate';
import { useState } from 'react';
import Footer from './Footer';

const WriteReview = () => {
    const [rating, setRating] = useState(0);

    const handleRatingChange = (newRating) => {
      setRating(newRating);
    };
    return(
        <div>
            {/* navbar would onl contain user avatar and logo */}
            <NavbarOne/>
            
            <div className='flex items-center'>
                <div className=' w-11/12 sm:w-[60%] mx-auto '>
                    <h1 className=' text-black text-[20px] '><strong>Select the business you'd like to review </strong></h1>
                    <h2 className=' text-black '>Review anything from your favorite patio spot to your local flower shop.</h2>
                    <SelectCategory/>
                </div>
                <img style={{ width: "150px", height: "150px", justifyContent: "flex-end", display: "flex", marginRight: "auto" }} src={ReviewLogo} alt='review logo' /> 
            </div>
            <div>
                <h3><strong>Visted one of these places recently?</strong></h3>
                <div
                    style={{
                        display: "flex",
                        alignItems: "flex-start",
                        height: " 150px ",
                        width: " 400px ",
                        border: "1px solid gray",
                    }}
                >
                    <img src='https://grandbaby-cakes.com/wp-content/uploads/2023/04/jollof-rice-recipe-23.jpg' alt='food' className='w-[150px] h-[150px] ' />
                    <div className='p-5' >
                        <h3><strong>Jollof Hut</strong></h3>
                        <p className="text-black text-[13px] ">
                            Do you recommand this business?
                        </p>
                        <div className="container">
                            <StarRating
                                totalStars={5}
                                initialRating={rating}
                                onRatingChange={handleRatingChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default WriteReview;