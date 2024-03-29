// import styled from 'styled-components';
// import SignUpImage from '../components/icons/undraw_sign_up_n6im.svg'
// import GoogleIcon from '../components/images/icons8-google-48.png'
// import { Link } from "react-router-dom";
import NewLogo from '../components/images/Reba logo.png';
import { useState } from 'react';
import GeoLocation from '../components/geolocation';
import { useNavigate } from 'react-router-dom'

const SignUpManual = () => {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const navigate = useNavigate();

    // const signUp = (e) => {
    //     e.preventDefault();
    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         console.log(userCredential)
    //     }).catch((error) => {
    //         console.log(error)
    //     }
        
    //     )
    //     navigate('/home');
    // }


    // const WrapStyle = styled.div`
    // @media (max-width : 700px) {
    //     display : none;
        
    // }
    // `;
    return (
        <div>
            <img src={NewLogo} alt='reba logo' />
            <div className='flex justify-center origin-[-50%_-50%] mt-[100px]'>
                <div className='flex flex-col items-center'>
                    <form 
                        className='flex flex-col items-center'
                        onSubmit={''}
                    >
                        <h1 style={{
                            color:"#081E40",
                            fontFamily : 'Sanchez',
                            fontSize : '32px',
                            lineHeight : '41px',
                            marginBottom: '20px'
                            }}>
                            Sign Up
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                            
                        >Sign Up</button>
                        <GeoLocation/>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default SignUpManual;