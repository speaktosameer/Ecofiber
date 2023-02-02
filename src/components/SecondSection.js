import React from 'react'


const SecondSection = () => {
  return (
    <div style={{backgroundColor: 'rgb(25, 177, 87)',
    backgroundSize: 'cover',
    height: '80vh',
    }}>
        <div style={{
        display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: '120px',
      paddingTop: '20rem'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '70%'
      }}>
        <div style={{
          width: '33%',
          height: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img src="images/product1.png" alt="Profile 1" style={{ width: '70%', borderRadius: '50%'  }} />
        </div>
        <div style={{
          width: '33%',
          height: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img src="images/product2.png" alt="Profile 2" style={{ width: '70%', borderRadius: '50%' }} />
        </div>
        <div style={{
          width: '33%',
          height: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img src="images/product1.png" alt="Profile 3" style={{ width: '70%', borderRadius: '50%' }} />
        </div>
      </div>
    </div>
      <h2 style={{  color: 'white',
     textAlign: 'center', paddingTop: '20px'  }}>
      BANANA FIBRE
      </h2>
      <br/>
​<p style={{ color: 'white', textAlign: 'center', fontSize: '2rem' , marginLeft: '10px', marginRight:'10px'}}>

Banana fibre is a natural fibre with high strength and can be easily blended with cotton and other fibres to <br/>produce blended fabrics and textiles.<br/>
Appearance of banana fibre is similar to Ramie bamboo fibre but its spinnability and fineness is better <br/> compared to Ramie Bamboo. The chemical composition of banana fibre is cellulose, hemicellulose and lignin. <br/> It is a stronge fibre with smaller elongation and shiny appearance is due to its extraction process.
    </p>    
</div>
  )
}

export default SecondSection