import './App.css';

function Footer(){
    return(
        <div className='text-[white] bg-[#5C5C5C] w-full '>
            <div className='flex'>
                <div className='ml-[70px]'>
                    <h5>Reba</h5>
                    <ul className='text-[#A59B9B] text-[15px] font-[Inter] '>
                        <li>Work with us</li>
                        <li>Categories</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <h6>SUPPORT</h6>
                    <ul className='text-[#A59B9B] text-[15px] font-[Inter] '>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                    <h6>INFORMATION</h6>
                    <ul className='text-[#A59B9B] text-[15px] font-[Inter] '>
                        <li>Pricing</li>
                        <li>About Us</li>
                        <li>Careers</li>
                    </ul>
                </div>
            </div>
            <h6 className=' flex justify-center items-center mt-[150px] font-[Inter] '>Copyright © 2023 Reba. All rights reserved.Reba Inc</h6>
        </div>
    )
}
export default Footer;