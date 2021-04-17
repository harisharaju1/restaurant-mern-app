import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {deleteItem} from '../redux/actions/itemActions';

const Card = ({item}) => {
    const dispatch = useDispatch();
 
    return (
        <div className='col-md-4 my-3'>
            <div className='card h-100'>
                <a href='#!'>
                    <img className='img-fluid w-100' src={`../../../uploads/${item.itemFileName}`} alt='item'></img>
                </a>
                <div className='card-body text-center'>
                    <h5>{item.itemName}</h5>
                    <hr />
                    < h6 className='mb-3'>
                        <span className='text-secondary mr-2'>
                            <i className="fas fa-rupee-sign text-secondary"></i> {item.itemPrice.toLocaleString('en-US',{
                                style:'currency',
                                currency:'USD',
                            })}
                        </span>
                    </h6>
                    <p>
                        {item.itemDesc.length > 60 ? item.itemDesc.substring(0,60) + '...' : item.itemDesc.substring(0,60)}
                    </p>
                    <Link to={`/admin/edit/item/${item._id}`} type='button' className='btn btn-secondary btn-sm mr-1 my-1'>
                        <i className='far fa-edit pr-1'></i>
                        Edit
                    </Link>
                    <button type='button' className='btn btn-danger btn-sm' onClick={() => dispatch(deleteItem(item._id))}>
                        <i className='far fa-trash-alt pr-1'></i>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;