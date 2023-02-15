
import Navbar from '../components/Navbar';
import './Home.css'
import img from '../free-family-shopping-vector.webp'
import img3 from '../1000_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo.jpg'
import img2 from '../premium_photo-1664202526559-e21e9c0fb46a.jpeg'
function HomePage() {

    return (
        <div  className='home'>
            <Navbar />
            <div  className='photo'>
   
            <img src={img}  style={{width:"100%"}} alt="" />
                     <img src={img3} style={{width:"100%"}}    alt="" />
                
                <img src={img2}style={{width:"100%"}}  alt="" />
                
                
            </div>
             

        </div>
    )
};

export default HomePage;
