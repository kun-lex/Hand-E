import Navbar from './Navbar'
import SelectCategory from './SelectCategory';
import  ReviewLogo from './icons/undraw_for_review_eqxk.svg';

const WriteReview = () => {
    return(
        <div>
            <Navbar/>
            <div className='flex'>
                <SelectCategory/>
                <img style={{ width: "150px", height: "150px", justifyContent: "flex-end", display: "flex", marginRight: "auto" }} src={ReviewLogo} alt='review logo' /> 
            </div>
            <h2> Select the business you'd like to review </h2>

        </div>
    )
}
export default WriteReview;