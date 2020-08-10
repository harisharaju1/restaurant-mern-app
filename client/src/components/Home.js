import React, { Fragment } from 'react';
import female from './female.jpg';
import rings from './rings.jpg';
import ring from './ring.jpg';
import pendants from './pendants.jpg'
import studs from './studs.jpg'
import coupleRings from './couple-rings.jpg';
import bangles from './bangles_new.jpg'
import watch from './watch.jpg'

const Home = () => {
    return(
        <Fragment>
        <section style={{backgroundColor:'black'}}>            
            <div className="container">
                <div className="carousel slide" id="main-carousel" data-ride="carousel">

                    <ol className="carousel-indicators">
                        <li data-target="#main-carousel" data-slide-to="0" className="active"></li>
                        <li data-target="#main-carousel" data-slide-to="1"></li>
                        <li data-target="#main-carousel" data-slide-to="2"></li>
                        <li data-target="#main-carousel" data-slide-to="3"></li>
                    </ol>
                    
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block img-fluid" src={female} alt=""/>
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Wedding Jewellery</h1>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src={rings} alt=""/>
                            <div className="carousel-caption d-none d-md-block">
                                <h3>Solitaire Rings</h3>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src={pendants} alt=""/>
                            <div className="carousel-caption d-none d-md-block">
                                <h3>Pendants</h3>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={coupleRings} alt="" className="d-block img-fluid"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h3>Engagement Rings</h3>
                            </div>
                        </div>
                    </div>
                    
                    <a href="#main-carousel" className="carousel-control-prev" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                        <span className="sr-only" aria-hidden="true">Prev</span>
                    </a>
                    <a href="#main-carousel" className="carousel-control-next" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                        <span className="sr-only" aria-hidden="true">Next</span>
                    </a>
                </div>
            </div>
        </section>
        <section className='services py-5 text-center'>
            <div className='container'>
                <div className='row'>
                    {/* single service */}
                    <div className='col-10 mx-auto col-md-6 col-lg-4 my-3'>
                        <span className='service-icon'>
                            <i className='fas fa-piggy-bank fa-2x'>
                            </i>
                        </span>
                        <h5 className='font-weight-bold text-uppercase'>
                            Online Order
                        </h5>
                        <p className='text-capitalize'>
                            Seemless online order at competitive prices
                        </p>
                    </div>
                    {/* end of single service */}

                    {/* single service */}
                    <div className='col-10 mx-auto col-md-6 col-lg-4 my-3'>
                        <span className='service-icon'>
                            <i className='fas fa-pencil-ruler fa-2x'>
                            </i>
                        </span>
                        <h5 className='font-weight-bold text-uppercase'>
                            Handmade Jewellery
                        </h5>
                        <p className='text-capitalize'>
                            Jewellery design and manufacturing by experts
                        </p>
                    </div>
                    {/* end of single service */}

                    {/* single service */}
                    <div className='col-10 mx-auto col-md-6 col-lg-4 my-3'>
                        <span className='service-icon'>
                            <i className='fas fa-file-invoice-dollar fa-2x'>
                            </i>
                        </span>
                        <h5 className='font-weight-bold text-uppercase'>
                            30 days money-back
                        </h5>
                        <p className='text-capitalize'>
                            Get your money back if not delivered within 30 days
                        </p>
                    </div>
                    {/* end of single service */}
                </div>
            </div>
        </section>
        <section id='products' className='products py-5'>
            <div className='container'>
                {/* section tile */}
                <div className='row'>
                    <div className='col-10 mx-auto col-sm-6 text-center'>
                        <h1 className='text-capitalize product-title'>
                            Featured Products
                        </h1>
                    </div>
                </div>
                {/* end of section title */}
                {/* products */}
                <div className='row product-items' id='product-items'>
                    {/* single item */}
                    <div className='col-10 col-sm-6 col-lg-4 mx-auto my-3'>
                        <div className='card single-item'>
                            <div className='img-container'>
                                <img src={studs} alt='' className='card-img-top product-img'/>
                            </div>
                            <div className='card-body'>
                                <div className='card-text d-flex justify-content-between text-capitalize'>
                                    <h5 id='item-name'>Diamond Studs</h5>
                                    <span><i className='fas fa-rupee-sign'> 350</i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end of single item */}

                    {/* single item */}
                    <div className='col-10 col-sm-6 col-lg-4 mx-auto my-3'>
                        <div className='card single-item'>
                            <div className='img-container'>
                                <img src={bangles} alt='' className='card-img-top product-img'/>
                            </div>
                            <div className='card-body'>
                                <div className='card-text d-flex justify-content-between text-capitalize'>
                                    <h5 id='item-name'>Diamond Bands</h5>
                                    <span><i className='fas fa-rupee-sign'> 500</i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end of single item */}

                    {/* single item */}
                    <div className='col-10 col-sm-6 col-lg-4 mx-auto my-3'>
                        <div className='card single-item'>
                            <div className='img-container'>
                                <img src={ring} alt='' className='card-img-top product-img'/>
                            </div>
                            <div className='card-body'>
                                <div className='card-text d-flex justify-content-between text-capitalize'>
                                    <h5 id='item-name'>Diamond Rings</h5>
                                    <span><i className='fas fa-rupee-sign'> 850</i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end of single item */}

                    {/* single item */}
                    <div className='col-10 col-sm-6 col-lg-4 mx-auto my-3'>
                        <div className='card single-item'>
                            <div className='img-container'>
                                <img src={watch} alt='' className='card-img-top product-img'/>
                            </div>
                            <div className='card-body'>
                                <div className='card-text d-flex justify-content-between text-capitalize'>
                                    <h5 id='item-name'>Custom Watch</h5>
                                    <span><i className='fas fa-rupee-sign'> 350</i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end of single item */}

                    {/* single item */}
                    <div className='col-10 col-sm-6 col-lg-4 mx-auto my-3'>
                        <div className='card single-item'>
                            <div className='img-container'>
                                <img src={studs} alt='' className='card-img-top product-img'/>
                            </div>
                            <div className='card-body'>
                                <div className='card-text d-flex justify-content-between text-capitalize'>
                                    <h5 id='item-name'>Diamond Studs</h5>
                                    <span><i className='fas fa-rupee-sign'> 350</i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end of single item */}

                    {/* single item */}
                    <div className='col-10 col-sm-6 col-lg-4 mx-auto my-3'>
                        <div className='card single-item'>
                            <div className='img-container'>
                                <img src={coupleRings} alt='' className='card-img-top product-img'/>
                            </div>
                            <div className='card-body'>
                                <div className='card-text d-flex justify-content-between text-capitalize'>
                                    <h5 id='item-name'>Diamond Rings</h5>
                                    <span><i className='fas fa-rupee-sign'> 350</i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end of single item */}
                </div>
                {/* end of products */}
            </div>
        </section>

        <footer className="mainfooter" role="contentinfo">
            <div className="footer-middle">
            <div className="container">
                <div className="row">
                <div className="col-md-3 col-sm-6">
                    {/* <!--Column1--> */}
                    <div className="footer-pad">
                    <h5>Know Your Jewellery</h5>
                    <ul className="list-unstyled">
                        <li><a href='/'></a></li>
                        <li><a href='/'>DIAMOND GUIDE</a></li>
                        <li><a href='/'>JEWELLERY GUIDE</a></li>
                        <li><a href='/'>GEMSTONES GUIDE</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    {/* <!--Column1--> */}
                    <div className="footer-pad">
                    <h5>Diamondlane Advantage</h5>
                    <ul className="list-unstyled">
                        <li><a href='/'>10 DAY RETURNS</a></li>
                        <li><a href='/'>FREE SHIPPING</a></li>
                        <li><a href='/'>FINANCING OPTIONS</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    {/* <!--Column1--> */}
                    <div className="footer-pad">
                    <h5>Customer Service</h5>
                    <ul className="list-unstyled">
                        <li><a href='/'>RETURN POLICY</a></li>
                        <li><a href='/'>ORDER STATUS</a></li>
                        <li>
                        <a href='/'></a>
                        </li>
                    </ul>
                    </div>
                </div>
                    <div className="col-md-3">
                        <h4>Contact Us</h4>
                        <ul className="social-network social-circle">
                        <li><a href='/' className="icoFacebook" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href='/' className="icoLinkedin" title="Linkedin"><i className="fab fa-instagram"></i></a></li>
                        </ul>				
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 copy">
                        <p className="text-center">&copy; Copyright 2020 - Diamond Lane.  All rights reserved.</p>
                    </div>
                </div>


            </div>
            </div>
            </footer>
                      
        </Fragment>
    );
};

export default Home;
