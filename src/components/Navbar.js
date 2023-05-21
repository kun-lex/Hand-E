// import myFunction from './Toggle';
import chevron from './icons/chevron.svg';
import group_five from './images/Group 5.png';
import './App.css';
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
export default function Navbar(){
  // dropdown burger

  function toggleMenu() {
    document.body.classList.toggle("open");
  };
    return(
      <nav class="navbar">
        <div class="nav-title"><h1>Reba <img  src={group_five} alt="logo" /> </h1></div>
          
        <div class="dropdowns">
          <div class="dropdown">
            <button>
            Auto Services
            <img src={chevron}  alt="chevron"/>
            </button>
            <div class="dropdown-menu">
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
          <div class="dropdown">
            <button>
              Home Services
              <img src={chevron}  alt="chevron" />
            </button>
            <div class="dropdown-menu">
              <div>
                <button>UX/UI Design</button>
                <button>Web Applications</button>
                <button>SEO Advice</button>
              </div>
            </div>
          </div>
          <div class="dropdown">
            <button>
              Find Place
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
        <div class="Log_btn">
            <Link to="/login">
              <button>Log In</button>
            </Link>
          <div><button>Sign Up</button></div>
        </div>
        <button onClick={toggleMenu} class="burger"> </button>
      </nav>
    )
}
