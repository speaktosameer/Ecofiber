import React from 'react'
import {FiShoppingCart} from 'react-icons/fi'

const Navbar = () => {
  return (
    <header id="home">
        <nav class="navbar navbar-default navbar-sticky bootsnav shadow-less">          
            <div class="top-search">
                <div class="container">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-search"></i></span>
                        <input type="text" class="form-control" placeholder="Search"/>
                        <span class="input-group-addon close-search"><i class="fa fa-times"></i></span>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="attr-nav circle-item">
                    <ul>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" >
                                <i class="fa"><FiShoppingCart/></i>
                                <span class="badge">3</span>
                            </a>
                            <ul class="dropdown-menu cart-list">
                                <li>
                                    <div class="thumb">
                                        <img src="assets/img/100x100.png" alt="Thumb"/>
                                    </div>
                                    <div class="content">
                                        <h6><a href="#">Angie's Boomchickapop Sweet & Salty Kettle Corn</a></h6>
                                        <p>2x - <span class="price">$99.99</span></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="thumb">
                                        <img src="assets/img/100x100.png" alt="Thumb"/>
                                    </div>
                                    <div class="content">
                                        <h6><a href="#">Omnes ocurreret</a></h6>
                                        <p>1x - <span class="price">$33.33</span></p>
                                    </div>
                                </li>
                                <li class="total">
                                    <span>Sub Total: <strong>$58.35</strong></span>
                                    <a href="#" class="btn btn-gray border">View cart</a>
                                    <a href="#" class="btn btn-theme effect">Checkout</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>        
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <i class="fa fa-bars"></i>
                    </button>
                    <a class="navbar-brand" href="index.html">
                        <img src="assets/img/ecofiber.png" class="logo" alt="Logo"/>
                    </a>
                </div>
                <div class="collapse navbar-collapse" id="navbar-menu">
                    <ul class="nav navbar-nav navbar-center" data-in="#" data-out="#">
                        <li class="dropdown">
                        <a href="contact.html">Home</a>
                        </li>
                        <li class="dropdown">
                        <a href="contact.html">About</a>
                        </li>
                        <li class="dropdown">
                        <a href="contact.html">Fibre Application</a>
                        </li>
                        <li class="dropdown">
                            {/* <a href="#" class="dropdown-toggle" data-toggle="dropdown" >Shop</a> */}
                            <a href="contact.html">Shop</a>
                        </li>
                        <li class="dropdown">
                            {/* <a href="#" class="dropdown-toggle" data-toggle="dropdown" >Contact</a> */}
                            <a href="contact.html">contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}
export default Navbar