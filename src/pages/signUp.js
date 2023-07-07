import styled from 'styled-components';
import Footer from '../components/Footer';
import NavbarOne from '../components/navbarOne';
import SignUpImage from '../components/icons/undraw_sign_up_n6im.svg'
import GoogleIcon from '../components/images/icons8-google-48.png'
import { Link } from "react-router-dom";

const SignUp = () => {
    const WrapStyle = styled.div`
    @media (max-width : 700px) {
        display : none;
        
    }
    @media (min-width: 700px ){
        display : flex;
    }
    `;
    return (
        <div>
            <NavbarOne />
            <div className='flex items-center justify-center w-full mt-[50px]'>
                <div className='flex'>
                    <div className='flex flex-col items-center'>
                        <h1 style={{
                            color:"#081E40",
                            fontFamily : 'Sanchez',
                            fontSize : '32px',
                            lineHeight : '41px',
                            marginBottom: '20px'
                            }}>
                            Sign Up
                        </h1>
                        <button
                            style={{
                                width: '200px',
                                height: '40px',
                                borderRadius: '32px',
                                background: 'black',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '10px'
                            }}
                        > <img src={GoogleIcon} className=' w-[20px] h-[20px] flex items-center ' alt='google' /> Sign Up with Facebook</button>
                        <button
                            style={{
                                width: '200px',
                                height: '40px',
                                borderRadius: '32px',
                                background: 'black',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '10px'
                            }}
                        > <img src={GoogleIcon} className=' w-[20px] h-[20px] flex items-center ' alt='google' /> Sign Up with Google</button>
                        <div className='flex items-center '>
                            <h5 className=' p-[5px] ' >or</h5>
                        </div>
                        <button
                            style={{
                                width: '200px',
                                height: '40px',
                                borderRadius: '32px',
                                background: 'black',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '10px'
                            }}
                        > <img src={GoogleIcon} className=' w-[20px] h-[20px] flex items-center ' alt='google' /> Sign Up Manually </button>
                        <p className='text-black' >Have an Account?</p>
                        <Link to="/sign-up">
                            <button
                                style={{
                                    display : 'flex',
                                    width : '70px',
                                    height : '25px',
                                    borderRadius : '5px',
                                    background :'#1352B0',
                                    color : 'white',
                                    alignItems : 'center',
                                    justifyContent : 'center',
                                    textAlign : 'center',
                                    fontFamily : 'Forum',
                                    marginBottom: '20px'
                                }}
                            >Sign In</button>
                        </Link>
                    </div>
                    <WrapStyle>
                        <div>
                        <img
                        style={{
                        width:'500px',
                        height: "250px",
                        }}
                        src={SignUpImage} alt='sign up' />
                        </div>
                    </WrapStyle>
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default SignUp;