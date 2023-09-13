import { useState } from 'react';
import chevron from './icons/chevron.svg';
import './App.css';
import { Link } from "react-router-dom";
import Logo from './images/hand-i icon (2).png';
import LogoIcon from './images/new icon.png';
import SelectCategory from './SelectCategory';
import { styled } from 'styled-components';

export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const WrapStyle = styled.div`
        @media (max-width : 700px) {
          background-color : #081540;
            
        }
    `;

  return (
    <WrapStyle>
      <nav className="justify-between max-w-5xl mx-4 lg:mx-auto">
      <div className="flex items-center justify-between pt-5">
        <Link to='/'>
          <div className=' relative hidden lg:inline-grid w-24 cursor-pointer' >
            <img 
              src={Logo}
              fill
              alt='logo'
              style={{objectFit:"contain"}}
                
            />
          </div>
          <div className='relative w-10 lg:hidden ml-2 flex-shrink-0 cursor-pointer nav-title'>
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
        <div className="hidden items-center md:flex ">
          <div className="dropdown">
            <a href='/' className='flex items-center text-[#081E40] text-[15px] cursor-pointer mr-[10px] ' >
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
            <a href='/' className='flex text-[#081E40] text-[15px] cursor-pointer mr-[10px] '>
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
            <a href='/' className='flex text-[#081E40] text-[15px] cursor-pointer mr-[10px] '>
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
          <div className='flex' >
          <Link to="/login">
              <button href='/' className='flex text-[#081E40] text-[12px] cursor-pointer '
              style={{
                  width : '50px',
                  height: '30px',
                  color:'#081E40',
                  alignItems: 'center',
                  justifyContent: 'center'
              }}
              >Log In</button>
          </Link>
          <Link to="/sign-up">
              <button className='flex items-center text-[12px] cursor-pointer mr-[10px] '
              style={{
                  width : '70px',
                  height: '30px',
                  background:'#1D5EBF',
                  color:'white',
                  borderRadius:'19.5px',
                  alignItems: 'center',
                  justifyContent: 'center'
              }}
              >Sign Up</button>
          </Link>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 space-y-1">
          <a href="/" className="block text-white">Auto Services</a>
          <a href="/" className="block text-white">Home Services</a>
          <a href="/" className="block text-white">Reba For Business</a>
          <Link to="/login">
              <button className='text-[12px] cursor-pointer '
              style={{
                  width : '50px',
                  height: '30px',
                  color:'white',
                  alignItems: 'center',
                  justifyContent: 'center'
              }}
              >Log In</button>
          </Link>
          <Link to="/sign-up">
              <button className='flex  text-[12px] cursor-pointer '
              style={{
                  width : '70px',
                  height: '30px',
                  background:'#1D5EBF',
                  color:'white',
                  borderRadius:'19.5px',
                  alignItems: 'center',
                  justifyContent: 'center'
              }}
              >Sign Up</button>
          </Link>
        </div>
      )}
      <div className=' w-11/12 sm:w-[60%] mx-auto mt-[20px]  '>
          <SelectCategory/>
        </div>
    </nav>
    </WrapStyle>
  );
        
}
