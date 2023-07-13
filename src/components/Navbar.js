import chevron from './icons/chevron.svg';
import './App.css';
import { Link } from "react-router-dom";
import NewLogo from './images/Reba logo.png'
import SelectCategory from './SelectCategory';
import  styled  from 'styled-components';
import carDetail from './icons/cardetailinglogo.svg';
import carRepair from './icons/carrepairlogo.svg';
import carWash from './icons/carwashlogo.svg';

export default function Navbar(){
  function toggleMenu() {
    document.body.classList.toggle("open");
  };
  const NavStyle = styled.div`
        @media (max-width : 700px) {
            background : #081E40;
        }
        
    `;
    return(
      <NavStyle>
        <nav className="navbar">
          <Link to='/'>
          <div className="nav-title ml-[10px] w-full "><img className='object-contain' src={NewLogo} alt="logo" /></div>
          </Link>
            
          <div className="dropdowns">
            <div className="dropdown">
              <a className='flex items-center text-[#081E40] text-[15px] cursor-pointer mr-[10px] ' >
              Auto Services
              <img src={chevron}  alt="chevron"/>
              </a>
              <div className="dropdown-menu">
                <div>
                  <button><img src={carRepair} className='h-[20px] w-[20px] ' alt='car wash'/>Auto Repair</button>
                  <button><img className='h-[20px] w-[20px] ' src={carDetail} alt='car wash'/>Auto Detailing</button>
                  <button><img className='h-[20px] w-[20px] ' src={carWash} alt='car wash'/>Car Wash</button>
                  <button>Towing</button>
                </div>
                <div>
                  <button><img src={carRepair} className='h-[20px] w-[20px] flex ' alt='car wash'/>Oil Change</button>
                  <button>Car Dealer</button>
                  <button>Parking</button>
                  <button>Body Shop</button>
                </div>
              </div>
            </div>
            <div className="dropdown">
              <a className='flex text-[#081E40] text-[15px] cursor-pointer mr-[10px] '>
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
              <a className='flex text-[#081E40] text-[15px] cursor-pointer mr-[10px] '>
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
            <a className='flex text-[#081E40] text-[12px] cursor-pointer '
              style={{
                width : '50px',
                height: '30px',
                color:'#081E40',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >Log In</a>
          </Link>
          <Link to="/sign-up">
            <a className='flex items-center text-[12px] cursor-pointer mr-[10px] '
              style={{
                width : '70px',
                height: '30px',
                background:'#1D5EBF',
                color:'white',
                borderRadius:'19.5px',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >Sign Up</a>
          </Link>
          <button onClick={toggleMenu} className="burger"> </button>
        </nav>
        <div className=' w-11/12 sm:w-[60%] mx-auto mt-[20px]  '>
          <SelectCategory/>
        </div>
      </NavStyle>
    )
}
