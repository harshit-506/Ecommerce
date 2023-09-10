import React from 'react'
import "./Footer.scss";  //adding styling
import { FaLocationArrow,FaMobileAlt,FaEnvelope} from "react-icons/fa"; // react icons 
import Payment from "../../assets/payments.png"
function Footer() {
  return (
    <footer>
      <div className='footer'>
        <div className='footer-content'>
          <div className='col'>
            <div className="title">About</div>
            <div className='text'>Voluptatem accusantium doloremque laudantium,totam rem
            aperiam,eaque ab illo inventore veritatis et
            quasi architecto beatea vitae dicta sunt explicabo eaque
            ipsa quae ab illo</div>
          </div>
          <div className='col'><div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow/>
            <div className="text"> Ishwar Market, Gali Haqim Baqa, Opp Chaumukha Mandir, Hauz Quazi, 110006
            </div>
            </div>
            <div className="c-item">
            <FaMobileAlt/>
            <div className="text">Phone : 8824838285 
            </div>
            </div>
            <div className="c-item">
            <FaEnvelope/>
            <div className="text">Email: harrystore@dev.com
            </div>
            </div>
            </div>
          <div className='col'><div className='title'>Categories</div>
          <span className='text'>Headphones</span>
          <span className='text'>Smart Watches</span>
          <span className='text'>Bluetooth Speakers</span>
          <span className='text'>Home Theatre</span>
          <span className='text'>Projectors</span>
          </div>
          <div className='col'><div className="title">Pages</div>
          <span className='text'>Home</span>
          <span className='text'>About</span>
          <span className='text'>Privacy Policy</span>
          <span className='text'>Returns</span>
          <span className='text'>Terms & Conditions</span>
          <span className='text'>Contact us</span>
          </div>
        </div>
        <div className="bottom-bar">
          <div className="bottom-bar-content">
            <div className="text">
            HARRYSTORE 2023 CREATED BY HARRY PREMIUM E-COMMERCE SOLUTION
            </div>
            <img src={Payment} alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
