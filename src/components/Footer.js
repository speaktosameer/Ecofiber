import styled from "styled-components";
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import {FiPhoneCall} from 'react-icons/fi'
import {SiFacebook} from 'react-icons/si'

import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h1 style={{textAlign:'center'}}>GET IN TOUCH</h1>
        <h3>We'd love to hear from you</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <h3> <NavLink to="mailto:priti@ecofibre.co.in"><MdOutlineMarkEmailUnread /> priti@ecofibre.co.in</NavLink></h3>
          </div>
          <div className="slide">
          <h3> <NavLink to="tel:+91 9833873710"><FiPhoneCall /> +91 9833873710</NavLink></h3>
          </div>
           <div className="slide">
           <h3> <NavLink to="mailto:priti@ecofibre.co.in"><SiFacebook /> Follow on Facebook</NavLink></h3>
            </div>
            <div className="slide">
            <h3> <NavLink to="/"> Refund Policy</NavLink></h3>
            <h3> <NavLink to="/"> Terms & Conditions</NavLink></h3>
            <h3> <NavLink to="/"> Privacy Policy</NavLink></h3>
            </div>
          </div>
        </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Footer;