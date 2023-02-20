import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'
import {RiSendPlaneFill} from 'react-icons/ri'

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
        <div className="container">
            <div className="f-items default-padding">
                <div className="row">
                    {/* <div className="col-lg-5 col-md-6 item">
                        <div className="f-item about">
                            <h4 className="widget-title">About Us</h4>
                            <p>
                                Required honoured trifling eat pleasure man relation. Assurance yet bed was improving furniture man. Distrusts delighted Excuse few the remain highly feebly add people manner say. It high at my mind by roof. 

                            </p>
                            <div className="social">
                                <ul>
                                    <li className="facebook">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li className="twitter">
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                    </li>
                                    <li className="youtube">
                                        <a href="#"><i className="fab fa-youtube"></i></a>
                                    </li>
                                    <li className="instagram">
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> */}

                    <div className="col-lg-4 col-md-6 item">
                        <div className="f-item link">
                            <h4 className="widget-title">Services</h4>
                            <ul>
                                <li>
                                    <a href="#">Banana Fibre</a>
                                </li>
                                <li>
                                    <a href="#">Hand Bags</a>
                                </li>
                                <li>
                                    <a href="#">Floor Mates</a>
                                </li>
                                <li>
                                    <a href="#">HandMade Paper</a>
                                </li>
                                <li>
                                    <a href="#">Hand Bags</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 item">
                        <div className="f-item link">
                            <h4 className="widget-title">Company</h4>
                            <ul>
                                <li>
                                    <a href="#">About Us</a>
                                </li>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Refund Policy</a>
                                </li>
                                <li>
                                    <a href="#">Terms & Condition</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 item">
                        <div className="f-item contact">
                            <h4 className="widget-title">Contact Us</h4>
                            <div className="address">
                                <ul>
                                    <li>
                                        <p>Address</p> 
                                        <strong>16, Sassoon Dock, Colaba, Mumbai 400 005 INDIA</strong>
                                    </li>
                                    <li>
                                        <p>Email</p> 
                                        <strong>Nitish @bhojpatta.com</strong>
                                    </li>
                                    <li>
                                        <p>Contact</p> 
                                        <strong>+91 90314 20611</strong>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="row align-center">
                    <div className="col-lg-4">
                        <p><strong>&copy; Copyright 2023.</strong> All Rights Reserved</p>
                    </div>
                    <div className="col-lg-4 text-center logo">
                        <a href="#"><img src="assets/img/ecofiber.png" alt="Logo"/></a>
                    </div>
                    <div className="col-lg-4 text-right newsletter">
                        <a href='https://www.facebook.com/profile.php?id=100090123504899'><p><FaFacebook/> BhojPatta</p></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer