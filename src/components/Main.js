import './App.css';
import search from './icons/search.svg';
import chevron from './icons/chevron.svg';
export default function Main() {
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  function filterFunction(){
    var input, filter, div, txtValue, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } 
      else {
        a[i].style.display = "none";
      }
    }
  }

  return(
    <main>
      <div className="flex-container">
      <div className='search-side'>
      <div class="search">
          <div class="dropdown-b">
            <button onClick={myFunction} class="dropbtn">Category <img src={chevron}  alt="chevron" /></button>
            <div id="myDropdown" class="dropdown-content">
              <input type="text" placeholder="Search Anything..." id="myInput" onkeyup={filterFunction} />
              <a href="#about">Home Services</a>
              <a href="#base">Auto Services</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Contact</a>
              <a href="#custom">Custom</a>
              <a href="#support">Support</a>
              <a href="#tools">Tools</a>
            </div>
          </div>
          <div class = "search-ul">
              <input type="text" class="search-bar" placeholder="Location"/>
              <button class="searchbutton"> <img src={search}  alt="search" /> </button>
          </div>
        </div>
        <div class="search">
        <h1 className='work-text'>Work with us</h1>
        <div>
          <h2>Get More From Your <br/> 
            Profession
          </h2>
          <button className='Learn-btn'>Learn More</button>
        </div>
        </div>
      </div>
      <div className='review-side'>
        <p className='review-title'>Leave a review</p>
        <input className='review-search-btn' placeholder='search' ></input>
        <p>Your opinion matters<br/>to us!</p>
      </div>
      </div>
      <div className='second-page'>
        <h2>Recent Activity</h2>
        <div className='nav2'>
          <button>Nearby</button>
          <button>Friends</button>
          <button>Following</button>
        </div>
        <p>jogh</p>
      </div>
    </main>
  )
}
