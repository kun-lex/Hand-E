import NewLogo from './images/Reba logo.png'
import { Link } from "react-router-dom";

const NewNav = () =>{
    function toggleMenu() {
        var x = document.querySelector(".navbar .nav-links");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }
    return (
        <nav class="navbar">
            <a class="logo" href="#">Logo</a>
            <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li class="dropdown">
                <a href="#" class="dropbtn">Dropdown</a>
                <div class="dropdown-content">
                <a href="#">Item 1</a>
                <a href="#">Item 2</a>
                <a href="#">Item 3</a>
                </div>
            </li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            </ul>
            <a href="javascript:void(0);" class="icon" onClick={toggleMenu}>&#9776;</a>
        </nav>
    )
}
export default NewNav;