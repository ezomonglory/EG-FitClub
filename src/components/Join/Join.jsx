import React, { useRef } from "react";
import "./Join.css"
import emailjs from "@emailjs/browser"

const Join = () => {
    const form = useRef()

	const sendEmail = (e) => {
		e.preventDefault();	
	
		emailjs.sendForm('service_rkit3ae', 'template_wr6vazb', form.current, 'fVaf5XJ1o2zAAUT1H')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
	  };


	return (
		<div className='join' id='join-us'>
			<div className='left-j'>
				<span></span>
				<div className='left-j-header'>
					<div>
						<span className='stroke-text'>ready to</span>
						<span> Level up</span>
					</div>
					<div>
						<span>your body</span>
						<span className='stroke-text'> with us?</span>
					</div>
				</div>
			</div>
			<div className='right-j'>
                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input type="email" name="user-emali" placeholder="Enter your Email address" />
                    <button className="btn btn-form">Join Now</button>
                </form>
            </div>
		</div>
	);
};

export default Join;
