import React from 'react'
import styled from 'styled-components'

const FourthSection = () => {
  return (
    <Wrapper className='container'>
        <div className='grid grid-two-column'>
            
            <div className='hero-section-data'>
                <h2 className='intro-data' style={{textAlign:'left'}}>Extraction Process</h2>
                <p style={{textAlign:'left'}}>
                    <ol>
                        <li>Banana stems are procured from the banana plantations.</li>
                        <li>By using cutter the banana stems are split into two.</li>
                        <li>Extraction mechanism has been used for fibre extraction.</li>
                        <li>After extraction it is passed through washing, squeezing and brusher for removing the pithy material. </li>
                        <li>Clean fibre is sun-dried and baled as required.</li>
                    </ol>
                </p>
                <br/>
            </div>
            <div className='grid grid-three-column'>
                <figure>
                    <img src="images/main.png" className='img-style'/>
                </figure>
                <figure>
                    <img src="images/main.png" className='img-style'/>
                </figure>
                <figure>
                    <img src="images/main.png" className='img-style'/>
                </figure>
                <figure>
                    <img src="images/main.png" className='img-style'/>
                </figure>
                <figure>
                    <img src="images/main.png" className='img-style'/>
                </figure>
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
    .grid grid-three-column
    {
        grid-template-columns: 1fr;

    }
    .img-style {
        width: 0%;
        height: auto;
      }
  }
`;

export default FourthSection