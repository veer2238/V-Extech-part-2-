import "./Banner.scss"
import BannerImg from "../../../../assets/banner-img.png"
const Banner = () => {
    return <div className="hero-banner">
    <div className="content">
        <div className="text-content">
            <h1>Internship</h1>
            <p>College Internship For 15 Days And For 3 Months available here only for Students</p>
            <div className="ctas">
                <div className="banner-cta">15 Days</div>
                <div className="banner-cta v2">3 Months</div>
            </div>
        </div>
        
        <img className="banner-img" src={BannerImg} alt=""/>
    </div>

    </div>;
};

export default Banner;