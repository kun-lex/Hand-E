import NewLogo from './images/Reba logo.png'
import { Link } from "react-router-dom";

const NewNav = () =>{
    return (
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
        <Link to='/'>
            <div className="nav-title"><img  src={NewLogo} alt="logo" /></div>
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
            </button>
            <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown">Auto Services</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/">Auto Repair</a></li>
                        <li><a class="dropdown-item" href="/">Auto Detailing</a></li>
                        <li><a class="dropdown-item" href="/">Car Wash</a></li>
                    </ul>
                    
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown">Home Services</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/">Auto Repair</a></li>
                        <li><a class="dropdown-item" href="/">Auto Detailing</a></li>
                        <li><a class="dropdown-item" href="/">Car Wash</a></li>
                    </ul>
                    
                </li>

            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                
            </div>
        </div>
        </nav>
    )
}
export default NewNav;