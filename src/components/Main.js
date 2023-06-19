import './App.css';
import search from './icons/search.svg';
import profile_pic from './images/profilepic.png';
import ImageSlider from './imageSlider';
import Select from 'react-select'
import slide1 from './images/join-us pic.png'
import slide2 from './images/slide 2.png'
import slide3 from './images/slide 3.png'


export default function Main() {
  const images = [
    slide1, slide2, slide3,
  ];


  // might need to declare as global variable

  return(
    <main>
      <div className='flex justify-center items center mt-10'>
        <Select
          placeholder='Search anything'
          className='w-[25%] h-9'
        />
        <input 
          type="text"
          className="text-black w-[25%] h-9 rounded -[2px]" placeholder="Location"
        />
        <button className='bg-[#081E40] hover: bg-[#081E40] ease-in-out duration-200 w-9 h-9 items-center justify-center '> <img src={search}  alt="search" /> </button>
      </div>
      <div className="flex justify-center items center">
      <div className='search-side'>
      <div class="flex">
      <div class="search">
        <h1 className='work-text'>Work with us</h1>
          <h2>Get More From Your <br/> 
            Profession
          </h2>
          <button className='Learn-btn'>Learn More</button>
        </div>
        </div>
      </div>
      <ImageSlider 
       images={images} 
       interval={3000}
      />
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
