import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const ThirdSection = () => {
  return (
    <Wrapper className='container'>
        <div className='grid grid-two-column'>
            <div className='hero-section-image'>
                <figure>
                    <img src="images/product4.png" className='img-style' style={{height: '420px'}}/>
                </figure>
            </div>
            <div className='hero-section-data' style={{paddingTop: '80px'}}>
                <h2 className='intro-data' style={{textAlign:'left'}}>Banana Fibre Properties</h2>
                <p style={{textAlign:'left'}}>
                It absorbs as well as releases moisture very fast.
It is biodegradable having no negative effect on the environment, thus can be categorised as eco-friendly fibre.

Properties of banana fibre are more inclined towards absorption of liquids and this makes it a very well suited fibre for use in sanitary pads.
                </p>
                <br/>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 12rem 0;
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .hero-section-data {
    p {
      margin: 2rem 0;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }
    .intro-data {
      margin-bottom: 0;
    }
  }
  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  }
  .img-style {
    width: 100%;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
    .hero-section-data
    {
        padding: 5rem;
    }
  }
`;

export default ThirdSection