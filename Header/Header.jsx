import "./Header.scss";
import { useEffect,useState,useContext } from "react";
import {Link, useNavigate} from "react-router-dom";
import {AiOutlineHeart, AiOutlineSearch} from  "react-icons/ai";
import {FiPhoneCall,FiUser} from "react-icons/fi"
import {RiServiceFill} from "react-icons/ri"
import {AiOutlineMenuUnfold} from "react-icons/ai"
import {BsFillArrowLeftCircleFill} from "react-icons/bs"
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/Context";
import { icons } from "react-icons";
const Header = () => {
    const [scrolled,setScrolled] = useState(false)

    const HandleScroll = () =>{
        
        const offset = window.scrollY
        if (offset>200){
            setScrolled(true);

        }else{
            setScrolled(false);
        }
       
    }



    useEffect(()=>{
        window.addEventListener("scroll",HandleScroll)
        

    },[])
    return (
        <header className={`main-header ${scrolled ? 'sticky-header' : ""}`}>
            <div className="header-content">
                <ul className="left">
                    <Link to="/contact">
                    <div className="icon-part">
                    <FiPhoneCall/> 
                   <li> Contact</li>
                   </div>
                   </Link>

                   <Link to="/service">
                   <div className="icon-part">
                    <RiServiceFill/> 
                   <li> Service</li>
                   </div>
                   </Link>

                   <Link to="/students">
                   <div className="icon-part">
                    <FiUser/> 
                   <li>Students</li>
                   </div>
                   </Link>
                  
                </ul>

                
                <div className="center"><Link to="/" style={{ color: "rgb(0, 217, 255)"}}>V-Ex Tech. Solution  </Link></div>
              
                <div className="right">
                    <AiOutlineSearch/>
                    <BsFillArrowLeftCircleFill/>
                  
                        <AiOutlineMenuUnfold/>
                       
                </div>
            </div>
        </header>
    )
    
    
};

export default Header;