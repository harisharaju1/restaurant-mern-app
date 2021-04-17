import React, { Fragment, useEffect } from 'react';
import {Link, withRouter} from 'react-router-dom';
import female from './images/female.jpg';
import rings from './images/rings.jpg';
import pendants from './images/pendants.jpg'
import coupleRings from './images/couple-rings.jpg';
//redux
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {getItems} from '../redux/actions/itemActions';

const Home = () => {
    /*****************************
     * 
     * REDUX GLOBAL STATE PROPS
     * 
    *****************************/ 
   
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getItems());
    },[dispatch]);

    const {items} = useSelector(state => state.items);

    console.log(items);

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
                    {items && items.map(item => (
                        <div key={item._id} className='col-10 col-sm-6 col-lg-4 mx-auto my-3'>
                        <div className='card single-item'>
                            <div className='img-container'>
                                <img src={`../../../uploads/${item.itemFileName}`} alt='' className='card-img-top product-img'/>
                            </div>
                            <div className='card-body'>
                                <div className='card-text d-flex justify-content-between text-capitalize'>
                                    <h5 id='item-name'>{item.itemName}</h5>
                                    <span><i className='fas fa-rupee-sign'> {item.itemPrice.toLocaleString('en-US',{
                                style:'currency',
                                currency:'USD',
                            })}</i></span>
                                </div>
                                <div>
                                    {/* <a href="#" className="btn btn-primary m-1">View Details</a> */}
                                    <Link to={`/item/${item._id}`} type='button' className='btn btn-primary btn-sm mr-1 my-1'>
                                    <i className='fas fa-eye'> View Details</i>
                                    </Link>
                                    <a href="#" className="btn btn-primary btn-sm mr-1 my-1">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                {/* end of products */}
            </div>
        </section>
        
        <section className='services py-5 text-center bg-dark'>
            <div className='container'>
                <div className='row' id='infosection'>
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
        <footer className="mainfooter" role="contentinfo">
            <div className="footer-middle">
            <div className="container">
                <div className="row">
                <div className="col-md-3 col-sm-6">
                    {/* <!--Column1--> */}
                    <div className="footer-pad">
                    <h5>Know Your Jewellery</h5>
                    <ul className="list-unstyled">                        
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

export default withRouter(Home);
