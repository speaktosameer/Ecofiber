import React from 'react'

const About = () => {
  return (
    <div className="about-area overflow-hidden default-padding">
        <div className="container">
            <div className="about-items">
                <div className="row align-center">

                    
                    <div className="col-lg-6">
                        <div className="thumb">
                            <img src="assets/img/ecofiber.png" alt="Thumb"/>
                        </div>
                    </div>
                    

                    <div className="col-lg-6">
                        <div className="content">
                            <h2>Who We Are</h2>
                            <p>
                            Millions across the globe are toiling to save the eco system. We decided to do our bit. With an extremely humble beginning we started ECOFIBRE.
                            </p>
                            <p>
                            At Ecofibre we extract the best from waste. With state-of-the-art infrastructure we are converting the banana stem to banana fibre.
                            </p>
                        <a data-animation="animated fadeInDown" className="btn btn-theme effect btn-sm" href="#">Read More</a>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default About