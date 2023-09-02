import styled from 'styled-components';
import SignUpImage from '../components/icons/undraw_sign_up_n6im.svg'
import GoogleIcon from '../components/images/icons8-google-48.png'
import { Link } from "react-router-dom";
import NewLogo from '../components/images/Reba logo.png';
import { useState } from 'react';

const SignUp = () => {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    // const signUp = (e) => {
    //     e.preventDefault();
    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         console.log(userCredential)
    //     }).catch((error) => {
    //         console.log(error)
    //     }
        
    //     )
    // }


    const WrapStyle = styled.div`
    @media (max-width : 700px) {
        display : none;
        
    }
    `;
    return (
        <div>
            <img src={NewLogo} alt='reba logo' />
            <div className='flex justify-center origin-[-50%_-50%] mt-[100px]'>
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
                            width: '300px',
                            height: '40px',
                            borderRadius: '32px',
                            background: '#1352B0',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '10px'
                        }}
                    > <img src={GoogleIcon} className=' w-[20px] h-[20px] flex items-center ' alt='google' /> Sign Up with Facebook</button>
                    <button
                        style={{
                            width: '300px',
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
                    <Link to='/sign-up-manually'>
                    <button
                        style={{
                            width: '300px',
                            height: '40px',
                            borderRadius: '32px',
                            background: '#BC8430',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '10px'
                        }}
                    > <img src={GoogleIcon} className=' w-[20px] h-[20px] flex items-center ' alt='google' /> Sign Up Manually </button>
                    </Link>
                    <p className='text-black' >Have an Account?</p>
                    <Link to="/login">
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
    )
}
export default SignUp;