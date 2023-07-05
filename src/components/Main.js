import './App.css';
import profile_pic from './images/profilepic.png';
import ImageSlider from './imageSlider';
import SelectCategory from './SelectCategory';
import slide1 from './images/join-us pic.png'
import slide2 from './images/slide 2.png'
import slide3 from './images/slide 3.png'
import ReviewPost from './reviewPost';


export default function Main() {
  const images = [
    slide1, slide2, slide3,
  ];

  return(
    <main>
      <div className=' mt-[40px] '>
        <SelectCategory/>
      </div>
      <div className="flex justify-center items-center mt-[30px] ">
        <div className='mr-[50px] '>
          <div class="flex">
            <div>
              <h1 className='work-text'>Work with us</h1>
              <h2 className='text-black'>Get More From Your <br/> 
                Profession
              </h2>
              <button className=' w-[130px] h-[35px] bg-[#081E40] rounded-[15px] items-center justify-center text-white '>Learn More</button>
            </div>
          </div>
        </div>
        <ImageSlider 
          images={images} 
          interval={3000}
        />
      </div>
      <div className='bg-[#9d9d9d] '>
        <div className='flex items-center justify-center'>
          <h2 style={{color:"white"}}>Recent Activity</h2>
        </div>
        <div className='flex items-center justify-center'>
          <div className='flex flex-row justify-between items-center m-0 w-[20%] text-white '>
            <button>Nearby</button>
            <button>Friends</button>
            <button>Following</button>
          </div>
        </div>
        <ReviewPost />
      </div>
    </main>
  )
}
