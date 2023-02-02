import React from 'react'

const FourSection = () => {
  return (

    <div  style={{
        backgroundImage: 'url(images/sbg.png)',
        backgroundSize: 'cover',
        opacity: '1',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <span style={{ color: 'white', fontSize: '30px' }}>SERVICE COMMITMENT</span>
      <span style={{ color: 'white', fontSize: '25px' }}>State of the art in-house infrastructure enables seamless production, thereby providing <br/> top of the line service to our valued customers.</span>
    </div>
  )
}


export default FourSection