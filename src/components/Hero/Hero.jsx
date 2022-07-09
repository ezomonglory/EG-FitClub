import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

export const Hero = () => {
	const transition = { type: "spring", duration: "3" };
	
	return (
		<div className='hero' id="hero">
			<div className='blur blur-h'></div>
			<div className='left-h'>
				<Header />
				{/* the best fit   */}
				<div className='best-fit'>
					<motion.div
						initial={{ left: "238px" }}
						whileInView={{ left: "8px" }}
						transition={{ ...transition, type: "tween" }}
					></motion.div>
					<span>the best fitness club in the town</span>
				</div>

				{/* hero text */}

				<div className='hero-text'>
					<div>
						<span className='stroke-text'>Shape</span> &nbsp;
						<span>your</span>
					</div>
					<div>ideal body</div>

					<div className='full'>
						<span>
							in here we will help you to shape build your ideal body and live
							up your life to fullest
						</span>
					</div>
				</div>

				{/* figures */}
				<div className='figures'>
					<div>
						<span>
						<NumberCounter end={150} delay="4" start={100} preFix="+"/>
						</span>
						<span>expert coaches</span>
					</div>
					<div>
						<span><NumberCounter end={978} delay="5" start={900} preFix="+"/></span>
						<span>members joined</span>
					</div>
					<div>
						<span><NumberCounter end={80} delay="5" start={60} preFix="+"/></span>
						<span>fitness programs</span>
					</div>
				</div>

				
				{/* calorie imag */}
				<motion.div
					initial={{ left: "-1rem" }}
					whileInView={{ left: "36rem" }}
					transition={{ ...transition, type: "tween" }}
					className='calories'
				>
					<img src={Calories} alt='' className='calorie_image' />
					<div className='calorie-text'>
						<span>caloires burned</span>
						<span>220 kcal</span>
					</div>
				</motion.div>

				{/* buttons */}

				<div className='buttons'>
					<div className='btn-get btn'>get started</div>

					<div className='btn-learn btn'>learn more</div>
				</div>
			</div>
			<div className='right-h'>
				<button className='btn'>Join Now</button>

				<motion.div
					// initial={{right:"-1rem"}}
					// whileInView={{right:"4rem"}}
					// transition={transition}
					initial={{ left: "238px" }}
					whileInView={{ left: "6rem" }}
					transition={{ ...transition, type: "tween" }}
					className='heart-rate'
				>
					<img src={Heart} alt='' />
					<span className='heart'>Heart Rate</span>
					<span className='bpm'>116 bpm</span>
				</motion.div>

				{/* hero image */}
				<img src={hero_image} alt='' className='hero_image' />
				<motion.img
				initial={{left:"0"}}
				whileInView={{left:"-12rem"}}
				transition={transition}
				src={hero_image_back} alt='' className='hero_image_back' />

				{/* calorie imag */}
				{/* <motion.div
					initial={{ left: "-18rem" }}
					whileInView={{ left: "-40rem" }}
					transition={{ ...transition, type: "tween" }}
					className='calories'
				>
					<img src={Calories} alt='' className='calorie_image' />
					<div className='calorie-text'>
						<span>caloires burned</span>
						<span>220 kcal</span>
					</div>
				</motion.div> */}
			</div>
		</div>
	);
};
