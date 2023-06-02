import './App.css';
import search from './icons/search.svg';
import chevron from './icons/chevron.svg';
import profile_pic from './images/profilepic.png';
import join_us from './images/join-us pic.png';
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
        <div class="d-flex">
        <div class="search">
        <h1 className='work-text'>Work with us</h1>
          <h2>Get More From Your <br/> 
            Profession
          </h2>
          <button className='Learn-btn'>Learn More</button>
        </div>
        <div>
        <img className='join-us' src={join_us} alt='join us' />
        </div>
        </div>
      </div>
      <div className='review-side'>
        <div className="title-deco"><p className='review-title'>Leave a review</p></div>
        
        <p>Your opinion matters<br/>to us!</p>
        <div className="title-deco"><button className='review-search-btn'>Write a review</button></div>
        <div className="title-deco"><p className='review-title'>Top reviews</p></div>
        <div className='d-flex'>
        <a class="navbar-brand" href="/">
          <img src={profile_pic} alt="Avatar Logo" style={{width:"40px"}} class="rounded-pill"/> 
        </a>
        <div className='top-review-content'>
          <p>Akinola David</p>
        </div>
        </div>
        <div className='d-flex'>
        <a class="navbar-brand" href="/">
          <img src={profile_pic} alt="Avatar Logo" style={{width:"40px"}} class="rounded-pill"/> 
        </a>
        <div className='top-review-content'>
          <p>Akinola David</p>
        </div>
        </div>
        <div className='d-flex'>
        <a class="navbar-brand" href="/">
          <img src={profile_pic} alt="Avatar Logo" style={{width:"40px"}} class="rounded-pill"/> 
        </a>
        <div className='top-review-content'>
          <p>Akinola David</p>
        </div>
        </div>
        
      </div>
      </div>
      <div className='second-page'>
        <div className='title-nav'>
          <h2 style={{color:"white"}}>Recent Activity</h2>
        </div>
        <div className='title-nav'>
          <div className='nav2'>
            <button>Nearby</button>
            <button>Friends</button>
            <button>Following</button>
          </div>
        </div>
        <div className='review-blocks'>
          <div className='block-1'>
            <div className='d-flex'>
              <a class="navbar-brand" href="/">
                <img src={profile_pic} alt="Avatar Logo" style={{width:"40px"}} class="rounded-pill"/> 
              </a>
              <div>
                <h6>David A.</h6>
                <p>Wrote a review</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
