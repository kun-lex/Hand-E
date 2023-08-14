import '../components/App.css'
import { useState, useEffect } from 'react';
import NewLogo from '../components/images/Reba logo.png';
import { Link } from 'react-router-dom';
import TextAnimation from '../components/textAnimation';
import Footer from '../components/Footer';

const RebaAgent = () => {
    const [isVisible, setIsVisible] = useState(false);

  // Set isVisible to true after a delay to trigger the entrance animation
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }, []);
  return (
    <div>
        <Link to='/' ><img src={NewLogo} alt='reba logo' /></Link>
        {/* description */}
        <div className='flex items-center justify-center'>
          <div className=''>
            <TextAnimation  isVisible={isVisible} />
            <h2 className='text-black'>Register on Our Web App Today</h2>
          </div>
        </div>
        <p></p>

        {/* imageslider */}
        {/* backgroung chage */}
        <Footer/>
    </div>
  )
}

export default RebaAgent