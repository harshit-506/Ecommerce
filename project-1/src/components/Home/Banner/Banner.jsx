import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

function Banner() {
  return (
    <div className="hero-banner">
       <div className="content">
        <div className="text-content">
               <h1>SALES</h1>
               <p>
                Convallis interdum purus adipiscing dis parturient
                posuere ac a quam a eleifend montes parturient posuerecurae tempor 
               </p>
               <div className="ctas">
                <div className="banner-cta">ReadMore</div>
                <div className="banner-cta v2">Shop Now</div>
               </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
       </div>
      
    </div>
  )
}

export default Banner
