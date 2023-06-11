import "./Footer.scss";
import { FaLocationArrow,FaMobileAlt,FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png"
import {AiOutlineWhatsApp} from "react-icons/ai"
import {ImLocation} from "react-icons/im"




const Footer = () => {
    return <footer className="footer">
    <div className="footer-content">
        <div className="col">
            <div className="title">About</div>
            <div className="text">
            "V-Ex Tech is a leading Internship & Training Service in Vadodara. 
            Join us for Professional  Programs in the field
             of Information Technology. We are 
             Providing Practical based Knowlage in Full-Stack Web Development,
              Java, .Net, PHP, Node.js, Python, Data Analytics, Software Testing/QA, Manual 
              Testing, Digital Marketing, SEO, Web UI/UX Design, Front End Development, React,
               Angular & many more!. Our goal is to give perfect Skills To Students. With
                 V-Ex Tech, we provide 100% job assistance to all of our
                 students. For more information, contact us at 9664768292"
            </div>
        </div>


        <div className="col">
        <div className="title">Contact</div>

        <div className="c-item">
            <FaLocationArrow/>
            <div className="text">101,Kunal Complex
             Nizampura,Beside Bank Of Baroda,Deluxe Char Rasta, vadodara-390002</div>
        </div>

        <div className="c-item">
            <FaMobileAlt/>
            <div className="text"><a href="9884768292">9664768292</a></div>
        </div>
       

        <div className="c-item">
            <FaEnvelope/>
            <div className="text"><a href="veer2238rajput@gmail.com">veer2238rajput@gmail.com</a></div>
        </div>

        <div className="c-item">
            <AiOutlineWhatsApp/>
            <div className="text"><a href="9316051170">9316051170</a></div>
        </div>

        <div className="c-item">
            <ImLocation/>
            <div className="text"><a href="https://g.co/kgs/fAm1bj">Google Map Location</a></div>
        </div>
        </div>

        <div className="col">
        <div className="title">Tranding Programs</div>
        <div className="text">Full Stack Developement</div>
        <div className="text">Mern Stack Developement</div>
        <div className="text">Data Analysis Cource</div>
        <div className="text">Data Science Course</div>
        <div className="text">Python With Django</div>
        <div className="text">Digital Marketing Course</div>
       
        
        
        </div>

        <div className="col">
        <div className="title">Pages</div>
        <span className="text">Home</span>
        <span className="text">Student</span>
        <span className="text">Service</span>
        <span className="text">Contact Us</span>
        <span className="text">Terms & Conditions</span>
        <span className="text">Privacy Policy</span>
       
        
        </div>
        
    </div>

    <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">
                &#169; Copyrights Reserved - V-Ex Tech 2023 .Software Solution SOLUTION.
            </div>
            <img src={Payment}/>
        </div>
    </div>


    </footer>;
};

export default Footer;