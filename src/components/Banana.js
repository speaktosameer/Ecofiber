import React from 'react'

const Banana = () => {
  return (
    <div className="brand-area bg-gray clients-area text-light">
        <div className="container">
            <div className="brand-items client-items">
                <div className="row align-center">
                    <div className="col-lg-6 info">
                        <h2>Banana Fibre</h2>
                        <p>
                        Banana fibre is a natural fibre with high strength and can be easily blended with cotton and other fibres to
produce blended fabrics and textiles.
Appearance of banana fibre is similar to Ramie bamboo fibre but its spinnability and fineness is better
compared to Ramie Bamboo. The chemical composition of banana fibre is cellulose, hemicellulose and lignin.
It is a stronge fibre with smaller elongation and shiny appearance is due to its extraction process.
                        </p>
                        <a className="btn circle btn-light border btn-md" href="#">Read More </a>
                    </div>
                    <div className="col-lg-6 brand">
                        <div className="partner-box">
                                <img src='assets/img/product1.png' alt='' style={{width:'150px', margin:'10px'}}/>
                                
                                <img src='assets/img/product2.png' alt=''style={{width:'150px', margin:'10px' }}/>
                                
                                <img src='assets/img/product3.png' alt=''style={{width:'150px', margin:'10px'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banana