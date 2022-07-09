import React from "react";
import "./Plan.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const Plan = () => {
	return (
		<div className='plans-container' id="plan">
			<div className="blur blur-p-1"></div>
			<div className="blur blur-p-2"></div>
			<div className='program-header'>
				<span className='stroke-text'>ready to start</span>
				<span>your journer</span>
				<span className='stroke-text'>with us</span>
			</div>

			<div className='Plan-categ'>
				{plansData.map((plan, i) => {
					return (
						<div className='plan-card' key={i}>
							{plan.icon}
							<span> {plan.name} </span>
							<span>$ {plan.price} </span>
							<span className='feat'>
								{plan.features.map((feature) => {
									{
										return (
											<span>
												<img src={whiteTick} alt='' />

												{feature}
											</span>
										);
									}
								})}
							</span>
							<span>
								see more benefit <span> &rarr;</span>
							</span>
							<span className='btn'>join now</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Plan;
