import React from 'react'
import { NavLink } from 'react-router-dom'
import {Button} from '../../styles/Button'
import styled from 'styled-components'

const SecondSection = () => {
  return (
    <Wrapper className='container'>
        <div className='grid grid-two-column'>
            <div className='hero-section-data'>
                <h2 className='intro-data' style={{textAlign:'left'}}>Our Story</h2>
                <p style={{textAlign:'left'}}>
                Bhojpatta was started with an aim to support the ecosystem and at the same time provide quality and sustainable raw material (banana fibre) which can be further processed into quality products.</p>
                <br/>
                <p style={{textAlign:'left'}}>Spread over 4000 square feet, our labour force comprises of mainly women who run state-of-the-art machinery installed to produce high quality banana fibre.</p>


            </div>
            <div className='hero-section-image'>
                <figure>
                    <img src="images/main.png" className='img-style'/>
                </figure>
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

export default SecondSection