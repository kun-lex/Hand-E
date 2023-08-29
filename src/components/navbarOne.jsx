import { useState } from 'react';
import chevron from './icons/chevron.svg';
import './App.css';
import { Link } from "react-router-dom";
import Logo from './images/hand-i icon (2).png';
import LogoIcon from './images/new icon.png';
import SelectCategory from './SelectCategory';

export default function NavbarOne(){
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="justify-between max-w-6xl mx-5 lg:mx-auto">
      <div className="flex items-center justify-between">
        <Link to='/'>
            <div className=' relative hidden lg:inline-grid w-24 cursor-pointer' >
                <img 
                    src={Logo}
                    fill
                    alt='logo'
                    style={{objectFit:"contain"}}
                    
                />
            </div>
            <div className='relative w-10 lg:hidden ml-2 flex-shrink-0 cursor-pointer nav-title' >
                <img 
                    src={LogoIcon}
                    fill
                    alt='logo'
                    style={{objectFit:"contain"}}
                />
            </div>
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="hidden items-center md:flex space-x-4">
            <div className="dropdown">
              <a className='flex items-center text-[#081E40] text-[15px] cursor-pointer mr-[10px] ' >
              Auto Services
              <img src={chevron}  alt="chevron"/>
              </a>
              <div className="dropdown-menu">
                <div>
                  <button>Auto Repair</button>
                  <button>Auto Detailing</button>
                  <button>Car Wash</button>
                  <button>Towing</button>
                </div>
                <div>
                  <button>Oil Change</button>
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
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <a href="#" className="block text-white">Auto Services</a>
          <a href="#" className="block text-white">Home Services</a>
          <a href="#" className="block text-white">Reba For Business</a>
        </div>
      )}
    </nav>
  );
        
}
