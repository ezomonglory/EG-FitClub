import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
	const mobile = window.innerWidth <= 768 ? true : false;
	const [menuOpened, setMenuOpened] = useState(false);

	return (
		<div className='header'>
			<img src={Logo} alt='' className='logo' />

			{menuOpened === false && mobile === true ? (
				<div className="barp" onClick={()=>{
          setMenuOpened(true)
        }}>
					<img src={Bars} alt='' className='bars' />
				</div>
			) : (
				<ul className='header-menu'>
          <span className="time" onClick={()=> {
            setMenuOpened(false)
          }}>&times;</span>
					<li><Link
            onClick={()=> {
              setMenuOpened(false)
            }}
            to="hero"
            activeClass="active"
            smooth={true}
            spy={true}
          >Home</Link></li>
					<li><Link
            onClick={()=> {
              setMenuOpened(false)
            }}
            to="program"
            smooth={true}
            spy={true}
          >Programs</Link></li>
					<li><Link
           onClick={()=> {
            setMenuOpened(false)
          }}
          to="reason"
          smooth={true}
          spy={true}
          >Why Us</Link></li>
					<li><Link
          onClick={()=> {
            setMenuOpened(false)
          }}
          to="plan"
          smooth={true}
          spy={true}
          >Plans</Link></li>
					<li 
          ><Link
          onClick={()=> {
            setMenuOpened(false)}}  
          to="testimonial"
          smooth={true}
          spy={true}
          >Testimonials</Link></li>
				</ul>
			)}
		</div>
	);
};

export default Header;
