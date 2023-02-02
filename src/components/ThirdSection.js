import React from 'react'
import styled from 'styled-components';

const ThirdSection = () => {
  return (
    <Wrapper>
      <div className="container">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '3rem',
        paddingBottom: '2rem'}}>
        <h3>QUALITY PRODUCE @ ECOFIBRE</h3>
        <p>At Ecofibre we are able to produce banana fibres with high tensile strength, low density, strong moisture with <br/> strong absorption quality, low elongation, making it a suitable in a wide range of products, namely ropes, <br/>handicrafts, garments, yarns and sanitary pads to name a few. </p>
        <h3 style={{textDecorationLine:'underline'}}>Single Fibre Strength</h3>
        </div>
        <div className="grid grid-three-column">
          <div className="services-1">
            <div>
              <h3>Extension(CV%)<br/>22.06</h3>
            </div>
          </div>

           <div className="services-2">
            <div className="services-colum-2">
              <div>
                <h3>Breaking Strength (CN) 675.86</h3>
              </div>
            </div>
            <div className="services-colum-2">
              <div>
                <h3>Breaking Extension (%) 5.01</h3>
              </div>
            </div>
            <div className="services-colum-2">
              <div>
                <h3>Strength (CV%) 22.33</h3>
              </div>
            </div>
          </div> 
             <div className="services-3">
            <div>
              <h3>Fibre Fineness (Denier)<br/>
                ATSM D 157-01/IS 234:1973<br/>
                172.84</h3>
            </div>
          </div>
        </div>
        

        {/* <div className="grid grid-two-column">
           <div className="services-1">
            <div>
              <TbTruckDelivery className="icon" />
              <h3>Breaking Strength (CN)<br/>675.86</h3>
            </div>
          </div>

           <div className="services-2">
            <div className="services-colum-2">
              <div>
                <MdSecurity className="icon" />
                <h3>Non-contact Shipping</h3>
              </div>
            </div>
            <div className="services-colum-2">
              <div>
                <GiReceiveMoney className="icon" />
                <h3>Money-back Guaranteed</h3>
              </div>
            </div>
          </div>
             <div className="services-3">
            <div>
              <h3>Breaking Extension (%)<br/>5.01</h3>
            </div>
          </div>
          <div className="services-3">
            <div>
              <h3>Strength (CV%)<br/>22.33</h3>
            </div>
          </div>
        </div> */}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 9rem 0;
  .grid {
    gap: 4.8rem;
  }
  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: ${({ theme }) => theme.colors.bg};
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }
  .services-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;
    .services-colum-2 {
      background: ${({ theme }) => theme.colors.bg};
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }
  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
  }
  .icon {
    /* font-size: rem; */
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }
`;

export default ThirdSection