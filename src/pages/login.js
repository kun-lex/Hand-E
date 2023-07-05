import '../components/App.css'
// import Log from '../components/icons/log.svg';
import NavbarOne from '../components/navbarOne';
import loginimg from '../components/icons/undraw_login_re_4vu2.svg'
import { styled } from 'styled-components';
import Footer from '../components/Footer';
import GoogleIcon from '../components/images/icons8-google-48.png'

export default function Login(){
    const WrapStyle = styled.div`
        @media (max-width : 700px) {
            display : flex;
            flex-wrap : wrap;
            flex-direction : column;
            align-items : center;
            justify-content : center;
            width : 100%;
        }
        @media (min-width: 700px ){
            display : flex;
            align-items : center;
            justify-content : center;
            width : 100%;
        }
    `;
    return(
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
                            Sign In
                        </h1>
                        <input
                            style={{
                                background : '#fffff',
                                borderRadius : '20px',
                                width : '250px',
                                height : '50px',
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
                                height : '50px',
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
                        >Continue with Google <img src={GoogleIcon} className=' w-[10px] h-[10px] ' alt='google' /> </button>
                        <p className='text-black' >Don't have an Account ?</p>
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
                    </div>
                    <div className='w-[1px] h-[200px] bg-zinc-700'></div>
                    <img
                    style={{
                        width:'500px',
                        height: "250px"
                    }}
                    src={loginimg} alt='log in' />
                </div>
            </div>
            <Footer/>
        </div>
    )
}