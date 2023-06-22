// import myFunction from './Toggle';
import chevron from './icons/chevron.svg';
import './App.css';
import { Link } from "react-router-dom";
import NewLogo from './images/Reba logo.png'
// import { Link } from 'react-router-dom';
export default function Navbar(){
  // dropdown burger

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
        <Link to="/login">
          <button
            style={{
              width : '50px',
              height: '30px',
              color:'#081E40',
            }}
          >Log In</button>
        </Link>
        <button
          style={{
            width : '70px',
            height: '30px',
            border:'1px solid #fff',
            background:'#1D5EBF',
            color:'white',
            borderRadius:'19.5px'
          }}
        >Sign Up</button>
        <button onClick={toggleMenu} className="burger"> </button>
      </nav>
    )
}
