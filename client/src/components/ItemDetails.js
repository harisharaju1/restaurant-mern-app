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
        <div>
            <Fragment>
                <div className='container my-3'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <Link to='/'>
							<span className='fas fa-arrow-left'>  Go Back</span>
						    </Link>
                                <br />
                                <br />
                            <div className='col-md-8'>
                                <img className='img-fluid' src={`../../../uploads/${itemFileName}`} alt='item' />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 row'>
                                <p>{itemName}</p>
                    </div>
                </div>
            </Fragment>
        </div>
    );
};

export default ItemDetails;