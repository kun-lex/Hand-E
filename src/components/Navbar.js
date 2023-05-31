// import myFunction from './Toggle';
import chevron from './icons/chevron.svg';
import logo from './images/logo.png';
import './App.css';
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
export default function Navbar(){
  // dropdown burger

  function toggleMenu() {
    document.body.classList.toggle("open");
  };
    return(
      <nav className="navbar">
        <Link to='/'>
        <div className="nav-title"><img  src={logo} alt="logo" /></div>
        </Link>
          
        <div className="dropdowns">
          <div className="dropdown">
            <button>
            Auto Services
            <img src={chevron}  alt="chevron"/>
            </button>
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
            <button>
              Home Services
              <img src={chevron}  alt="chevron" />
            </button>
            <div className="dropdown-menu">
              <div>
                <button>UX/UI Design</button>
                <button>Web Applications</button>
                <button>SEO Advice</button>
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
                <button>Live Messenger</button>
                <button>Support Email</button>
                <button>Request Help</button>
              </div>
            </div>
          </div>
        </div>
        <div className="Log_btn">
          <Link to="/login">
            <button className="none-decor">Log In</button>
          </Link>
          <button className='sign-up-btn'>Sign Up</button>
        </div>
        <button onClick={toggleMenu} className="burger"> </button>
      </nav>
    )
}
