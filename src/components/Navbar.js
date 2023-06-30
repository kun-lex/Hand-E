// import myFunction from './Toggle';
import chevron from './icons/chevron.svg';
import './App.css';
import { Link } from "react-router-dom";
import NewLogo from './images/Reba logo.png'
import styled from 'styled-components';

// import { Link } from 'react-router-dom';
export default function Navbar(){
  const DropDownMenu = styled.div`
    position: absolute;
    top: 50px;
    left: 0;
    display: flex;
    gap: 32px;
    padding: 6px 24px 20px;
    margin-bottom: 0;
    justify-content: flex-start;
    background: #081E40;
    opacity: 0;
    visibility: hidden;
    translate: 0 24px;
    transition: 0.3s;
    borderRadius: 10px;
  `;

  function toggleMenu() {
    document.body.classList.toggle("open");
  };
    return(
      <nav className="navbar">
        <Link to='/'>
        <div className="nav-title"><img  src={NewLogo} alt="logo" /></div>
        </Link>
          
        <div className="dropdowns">
          <div className="dropdown">
            <button>
            Auto Services
            <img src={chevron}  alt="chevron"/>
            </button>
            <DropDownMenu>
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
            </DropDownMenu>
          </div>
          <div className="dropdown">
            <button>
              Home Services
              <img src={chevron}  alt="chevron" />
            </button>
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
            <button>
              Reba For Business
              <img src={chevron}  alt="chevron" />
            </button>
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
          <button
            style={{
              width : '50px',
              height: '30px',
              color:'#081E40',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >Log In</button>
        </Link>
        <Link>
          <button
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
          >Sign Up</button>
          <button onClick={toggleMenu} className="burger"> </button>
        </Link>
      </nav>
    )
}
