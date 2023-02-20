import React from 'react'

const HeroSection = () => {
  return (
    <div className="banner-area auto-height">
        <div className="box-banner">
            <div className="container">
                <div id="bootcarousel" className="carousel carousel-fade slide animate_text" data-ride="carousel">

                    
                    <div className="carousel-indicator">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <ol className="carousel-indicators theme">
                                        {/* <li data-target="#bootcarousel" data-slide-to="0" className="active"></li> */}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row align-center">
                                <div className="col-lg-6">
                                    <div className="content">
                                        <h2 data-animation="animated fadeInLeft"><strong>Welcome to BhojPatta</strong></h2>
                                        <p className="animated fadeInUp">
                                        We extract the best from waste. With state-of-the-art infrastructure we are converting the banana stem to banana fibre.
                                        </p>
                                        <a data-animation="animated fadeInDown" className="btn btn-theme effect btn-sm" href="#">Shop Now</a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="thumb" data-animation="animated fadeInUp">
                                        <img src="assets/img/ecofiber.png" alt="Thumb"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    


                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection