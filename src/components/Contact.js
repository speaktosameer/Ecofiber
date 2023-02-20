import React from 'react'
import {BsMailbox} from 'react-icons/bs'
import {ImLocation2} from 'react-icons/im'
import {FiPhoneCall} from 'react-icons/fi'


const Contact = () => {
  return (
    <>
        <div className="contact-area default-padding">
    
    <div className="container">
        <div className="contact-items">
            <div className="row">
                
            
                <div className="col-lg-7 contact-box">
                    <div className="form-items">
                        <h5>Contact Us</h5>
                        <h2>Then book your BhojPatta from <br/>our exclusive offers.</h2>
                        <form action="assets/mail/contact.php" method="POST" className="contact-form">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input className="form-control" id="name" name="name" placeholder="Name" type="text"/>
                                        <span className="alert-error"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input className="form-control" id="email" name="email" placeholder="Email*" type="email"/>
                                        <span className="alert-error"></span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text"/>
                                        <span className="alert-error"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group comments">
                                        <textarea className="form-control" id="comments" name="comments" placeholder="Tell Us About Project *"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <button type="submit" name="submit" id="submit">
                                        Send Now
                                    </button>
                                </div>
                            </div>
                            
                            <div className="col-lg-12 alert-notification">
                                <div id="message" className="alert-msg"></div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="col-lg-5 left-info">
                    <div className="info-items">
                        <div className="item">
                            <div className="icon">
                                <i className="flaticon"><ImLocation2/></i>
                            </div>
                            <div className="info">
                                <h5>Location</h5>
                                <p>
                                16, Sassoon Dock, Colaba,  Mumbai 400 005 INDIA
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <i className="flaticon"><FiPhoneCall/></i>
                            </div>
                            <div className="info">
                                <h5>Make a Call</h5>
                                <p>
                                +91 90314 20611
                                </p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="icon">
                                <i className="flaticon"><BsMailbox/></i>
                            </div>
                            <div className="info">
                                <h5>Send a Mail</h5>
                                <p>
                                Nitish @bhojpatta.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    </div>
</div>
<div className="maps-area">
    <div className="google-maps">
        <iframe src="https://www.google.com/maps/embed/v1/place?q=16,+Sassoon+Dock+Road,+Azad+Nagar,+Colaba,+Mumbai,+Maharashtra+400005,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
    </div>
</div>

    </>
  )
}

export default Contact