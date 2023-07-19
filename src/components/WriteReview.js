import SelectCategory from './SelectCategory';
import  ReviewLogo from './icons/undraw_for_review_eqxk.svg';
import NavbarOne from './navbarOne';

const WriteReview = () => {
    return(
        <div>
            {/* navbar would onl contain user avatar and logo */}
            <NavbarOne/>
            <h1 className=' text-black '> Select the business you'd like to review </h1>
            <h2>Review anything from your favorite patio spot to your local flower shop.</h2>
            <div className='flex items-center'>
                <div className=' w-11/12 sm:w-[60%] mx-auto '>
                    <SelectCategory/>
                </div>
                <img style={{ width: "150px", height: "150px", justifyContent: "flex-end", display: "flex", marginRight: "auto" }} src={ReviewLogo} alt='review logo' /> 
            </div>
            

        </div>
    )
}
export default WriteReview;