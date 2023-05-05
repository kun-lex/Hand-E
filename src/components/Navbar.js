// import myFunction from './Toggle';
import chevron from './icons/chevron.svg';
import './App.css';
import { Link } from 'react-router-dom';
export default function Navbar(){
  // dropdown burger

  function toggleMenu() {
    document.body.classList.toggle("open");
  };
    return(
        <nav class="navbar">
          <button onClick={toggleMenu} class="burger">
          </button>

          <div class="nav-title"><h1>Handy</h1></div>
          
          <div class="dropdowns">
          <div class="dropdown">
            <Link to="/login">
            <button>
            Home service
            <img src={chevron}  alt="chevron"/>
            </button>
            </Link>
            <div class="dropdown-menu">
              <div>
                <h2>Digital</h2>
                <button>Learn CSS Ebook</button>
                <button>Security Course</button>
                <button>Masterclass Bundle</button>
              </div>
              <div>
                <h2>Electronic</h2>
                <button>CSS Digital Clock</button>
                <button>UX Master Mouse</button>
                <button>Type Fast Keyboard</button>
              </div>
              <div>
                <h2>Documents</h2>
                <button>Email Template</button>
                <button>Desktop Wallpaper</button>
                <button>Portfolio Code</button>
              </div>
            </div>
          </div>
            <div class="dropdown">
              <button>
                Resturants
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
                Auto service
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
            <button>Log in |</button><button> Sign up </button>
          </div>
        
      </nav>
    )
}
