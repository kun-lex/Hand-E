import '../components/App.css'
import NewLogo from '../components/images/Reba logo.png'
import NavbarOne from '../components/navbarOne';
import loginimg from '../components/icons/undraw_login_re_4vu2.svg'
import styled from 'styled-components';
import GoogleIcon from '../components/images/icons8-google-48.png'
import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { connect } from "react-redux"
import { login } from '../actions/auth';
import axios from 'axios';

const Login = ({ login, isAuthenticated }) => {
    const [FormData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = FormData;

    const onChange = e => setFormData({ ...FormData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
    }
    const continueWithGoogle = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    };
    const continueWithFacebook = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/facebook/?redirect_uri=${process.env.REACT_APP_API_URL}/facebook`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    };

    if (isAuthenticated) {
        return <Navigate to='/' />
    }

    // const signIn = (e) => {
    //     e.preventDefault();
    //     signInWithEmailAndPassword(auth, email, password)
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
        @media (min-width: 700px ){
            display : flex;
        }
    `;
    return(
        <div>
            <img src={NewLogo} alt='reba logo' />
            <div className='flex items-center justify-center w-full mt-[50px]'>
                <div className='flex'>
                    <form 
                        className='flex flex-col items-center'
                        onSubmit={e => onSubmit(e)}
                    >
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
                            type="email"
                            placeholder='Username or Email'
                            name='email'
                            value={email}
                            onChange={e => onChange(e)}
                            required
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
                            name='password'
                            value={password}
                            onChange={e => onChange(e)}
                            minLength = {6}
                            required
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
                            type='submit'
                        >Sign In</button>

                        {/* Reset password */}
                        <Link to='/reset-password' >
                            <a className='cursor-pointer' >Forgot Password ?</a>
                        </Link>

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
                            }}>
                            <img src={GoogleIcon} onClick={continueWithGoogle} className=' w-[20px] h-[20px] flex items-center ' alt='google' /> 
                            Continue with Google
                        </button>

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
                    </form>
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
    );
};

const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);