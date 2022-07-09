import React from 'react'
import "./Footer.css"
import GitHub from "../../assets/github.png"
import Linkedln from "../../assets/linkedin.png"
import Instagram from "../../assets/instagram.png"
import Logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <div className="footer-cont">
        <hr />
        <div className="footer">
            <div className="socials">
            <img src={GitHub} alt="" />
            <img src={Linkedln} alt="" />
            <img src={Instagram} alt="" />
            </div>

        <div className="logo-f">
            <img src={Logo} alt="" />
        </div>
        </div>

        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
    </div>
  )
}

export default Footer