import '../components/App.css'
// import Log from '../components/icons/log.svg';
import Navbar from '../components/Navbar'
import loginimg from '../components/icons/undraw_login_re_4vu2.svg'

export default function Login(){
    return(
        <div>
            <Navbar />
            <div className='flex items-center justify-center mt-[100px]'>
                <div className='flex'>
                    <div>
                        <h1 style={{
                            color:"#081E40",
                            fontFamily : 'Sanchez',
                            fontSize : '32px',
                            lineHeight : '41px'
                            }}>
                            Sign In
                        </h1>
                        <input
                            style={{
                                background : '#fffff',
                                borderRadius : '20px',
                                width : '250px',
                                height : '50px'
                            }}
                            type="text"
                            placeholder='Username or Email'
                        />
                        <input
                            style={{
                                background : '#fffff',
                                borderRadius : '20px',
                                width : '250px',
                                height : '50px'
                            }}
                            type="password"
                            placeholder='Password'
                        />
                    </div>
                    <img
                    style={{
                        width:'703px',
                        height: "480px"
                    }}
                    src={loginimg} alt='log in' />
                </div>
            </div>
        </div>
    )
}