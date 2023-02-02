import React from 'react'

const HeroSection = () => {
  return (

    <div  style={{
        backgroundImage: 'url(images/background.jpg)',
        backgroundSize: 'cover',
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <h1 style={{ color: 'white' }}>About Us</h1>
    </div>
  )
}


export default HeroSection