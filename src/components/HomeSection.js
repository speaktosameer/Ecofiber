import React from 'react'
import { NavLink } from 'react-router-dom'
import {Button} from '../styles/Button'
import styled from 'styled-components'

const HomeSection = () => {
  return (
    <Wrapper className='container'>
        <div className='grid grid-two-column'>
            <div className='hero-section-image'>
                <figure>
                    <img src="images/main.png" className='img-style'/>
                </figure>
            </div>
            <div className='hero-section-data'>
                <h2 className='intro-data'>Who we are</h2>
                <p>
                Millions across the globe are toiling to save the eco system. We decided to do our bit. With an extremely humble beginning we started Bhojpatta.
                <br/> <br/>At Bhojpatta we extract the best from waste. With state-of-the-art infrastructure we are converting the banana stem to banana fibre.
                </p>
                <br/>
                <NavLink to='/about'><Button>Read More</Button></NavLink>
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

export default HomeSection