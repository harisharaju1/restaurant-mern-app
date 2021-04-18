import React, {useState, useEffect, Fragment} from 'react';
import AdminHeader from './AdminHeader';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {getItem} from '../redux/actions/itemActions'

const ItemDetails = ({match}) => {
    /*****************************
     * 
     * PARAMS
     * 
    *****************************/ 

    const itemId = match.params.itemId;

    /*****************************
     * 
     * REDUX GLOBAL STATE PROPS
     * 
    *****************************/ 

    const dispatch = useDispatch();

    const {item} = useSelector(state => state.items);

    //console.log(item);

    //const {categories} = useSelector(state => state.categories);

    /*****************************
     * 
     * COMPONENT STATE PROPS
     * 
    *****************************/ 

    const [itemName, setItemName] = useState('');
    const [itemDesc, setItemDesc] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemQuantity, setItemQuantity] = useState('');
    const [itemCategory, setItemCategory] = useState('');
    const [itemWeight, setItemWeight] = useState('');
    const [itemImage, setItemImage] = useState(null);
    const [itemFileName, setItemFileName] = useState('');

    /*****************************
     * 
     * LIFECYCLE METHODS
     * 
    *****************************/ 

    useEffect(() => {
        if(!item){
           dispatch(getItem(itemId)); 
           //dispatch(getCategories()); 
        } else {
            setItemName(item.itemName);
            setItemDesc(item.itemDesc);
            setItemPrice(item.itemPrice);
            setItemQuantity(item.itemQuantity);
            setItemCategory(item.itemCategory);
            setItemWeight(item.itemWeight);
            setItemImage(item.itemImage);
            setItemFileName(item.itemFileName);
        }
    }, [dispatch, itemId, item]);

    return (
        <Fragment>
            <div>
                <section className="mb-5 m-5" id=''>

                <div className="row">
                    <div className="col-md-6 mb-4 mb-md-0">

                    <div id="mdb-lightbox-ui"></div>

                    <div className="mdb-lightbox">
                        <div className="row product-gallery mx-1">
                        <div className="col-12 mb-0">
                            <figure className="view overlay rounded z-depth-1 main-img">
                                <img src={`../../../uploads/${itemFileName}`}
                                className="img-fluid z-depth-1"/>
                            </figure>
                        </div>
                        </div>

                    </div>

                    </div>
                    <div className="col-md-6">

                    <h5>{itemName}</h5>
                    <p className="mb-2 text-muted text-uppercase small">{itemCategory}</p>
                    {/* <p><span className="mr-1"><strong><i className='fas fa-rupee-sign'> {itemPrice}</i></strong></span></p> */}
                    <p className="pt-1">{itemDesc}</p>
                    <div className="table-responsive">
                        <table className="table table-sm table-borderless mb-0">
                        <tbody>
                            <tr>
                            <th className="pl-0 w-25" scope="row"><strong>Weight</strong></th>
                            <td>{itemWeight}</td>
                            </tr>
                            <tr>
                            <th className="pl-0 w-25" scope="row"><strong>Price</strong></th>
                            <td>{itemPrice}</td>
                            </tr>
                            <tr>
                            <th className="pl-0 w-25" scope="row"><strong>Delivery</strong></th>
                            <td>Bengaluru, India</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <hr/>
                    <button type="button" className="btn btn-primary btn-md mr-1 mb-2">Buy now</button>
                    <button type="button" className="btn btn-light btn-md mr-1 mb-2"><i
                        className="fas fa-shopping-cart pr-2"></i>Add to cart</button>
                    </div>
                </div>

                </section>
            </div>
        </Fragment>
    );//your line
};

export default ItemDetails;