import '../components/App.css'
import NewLogo from '../components/images/Reba logo.png'
import NavbarOne from '../components/navbarOne';
import loginimg from '../components/icons/undraw_login_re_4vu2.svg'
import styled from 'styled-components';
import GoogleIcon from '../components/images/icons8-google-48.png'
import { Link } from 'react-router-dom';

export default function Login(){
    const WrapStyle = styled.div`
        @media (max-width : 700px) {
            display : none;
            
        }
        @media (min-width: 700px ){
            display : flex;
        }
    `;
    return(
        <div>
            <img src={NewLogo} alt='reba logo' />
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
                            Sign In
                        </h1>
                        <input
                            style={{
                                background : '#fffff',
                                borderRadius : '20px',
                                width : '250px',
                                height : '40px',
                                padding: '10px',
                                marginBottom: '20px'
                            }}
                            type="text"
                            placeholder='Username or Email'
                        />
                        <input
                            style={{
                                background : '#fffff',
                                borderRadius : '20px',
                                width : '250px',
                                height : '40px',
                                padding: '10px',
                                marginBottom: '20px'
                            }}
                            type="password"
                            placeholder='Password'
                        />
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
                            }}
                        >Sign In</button>
                        <a className='cursor-pointer' >Forgot Password ?</a>
                        <div className='flex items-center '>
                            <h5 className=' p-[5px] ' >or</h5>
                        </div>
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
                        > <img src={GoogleIcon} className=' w-[20px] h-[20px] flex items-center ' alt='google' /> Continue with Google</button>
                        <p className='text-black' >Don't have an Account ?</p>
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
                            >Sign Up</button>
                        </Link>
                    </div>
                    <WrapStyle>
                        <div>
                        <img
                        style={{
                        width:'500px',
                        height: "250px",
                        }}
                        src={loginimg} alt='log in' />
                        </div>
                    </WrapStyle>
                    
                </div>
            </div>
        </div>
    )
}