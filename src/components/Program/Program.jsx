import React from 'react'
import {programsData} from "../../data/programsData"
import "./Program.css"

const Program = () => {
  return (
    <div className="program" id='program'>
        <div className="program-header">
            <span className='stroke-text'>explore our</span>
            <span>programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>

        <div className="program-card">
            {programsData.map((program) => {
               return(
                <div className="program-categ">
                 {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>

                <div className="join-now">
                    <span>Join Now</span>
                    <span>&rarr;</span>
                </div>
               </div>
               )
            })}
        </div>
    </div>
  )
}

export default Program