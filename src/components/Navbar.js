import chevron from './icons/chevron.svg';
import './App.css';
import { Link } from "react-router-dom";
import NewLogo from './images/Reba logo.png'

export default function Navbar(){
  function toggleMenu() {
    document.body.classList.toggle("open");
  };
    return(
      <nav className="navbar">
        <Link to='/'>
        <div className="nav-title ml-[10px] "><img  src={NewLogo} alt="logo" /></div>
        </Link>
          
        <div className="dropdowns">
          <div className="dropdown">
            <a className='flex items-center text-[#081E40] cursor-pointer ' >
            Auto Services
            <img src={chevron}  alt="chevron"/>
            </a>
            <div className="dropdown-menu">
              <ul>
                <li>Auto Repair</li>
                <li>Auto Detailing</li>
                <li>Car Wash</li>
                <li>Towing</li>
              </ul>
              <div>
                <button>Oil Change</button>
                <button>Car Dealer</button>
                <button>Parking</button>
                <button>Body Shop</button>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <a className='flex text-[#081E40] cursor-pointer '>
              Home Services
              <img src={chevron}  alt="chevron" />
            </a>
            <div className="dropdown-menu">
              <div>
                <button>Contractors</button>
                <button>Electricians</button>
                <button>Home Cleaners</button>
                <button>Plumbers</button>
              </div>
              <div>
                <button>Movers</button>
                <button>Painters & <br/> Decorators</button>
                <button>LockSmiths</button>
                <button>HVAC</button>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <a className='flex text-[#081E40] cursor-pointer '>
              Reba For Business
              <img src={chevron}  alt="chevron" />
            </a>
            <div class="dropdown-menu">
              <div>
                <button>Add a Business</button>
                <button>Claim your business</button>
                <button>Log in to Business Account</button>
              </div>
            </div>
          </div>
        </div>
        <Link to="/login">
          <a className='flex text-[#081E40] cursor-pointer '
            style={{
              width : '50px',
              height: '30px',
              color:'#081E40',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >Log In</a>
        </Link>
        <Link>
          <a className='flex  cursor-pointer '
            style={{
              width : '70px',
              height: '30px',
              border:'1px solid #fff',
              background:'#1D5EBF',
              color:'white',
              borderRadius:'19.5px',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >Sign Up</a>
          <button onClick={toggleMenu} className="burger"> </button>
        </Link>
      </nav>
    )
}
