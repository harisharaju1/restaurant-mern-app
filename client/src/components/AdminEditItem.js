import React, {useState, useEffect, Fragment} from 'react';
import AdminHeader from './AdminHeader';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {getItem} from '../redux/actions/itemActions'
import {getCategories} from '../redux/actions/categoryActions'
import axios from 'axios';

const AdminEditItem = ({match, history}) => {
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

    const {categories} = useSelector(state => state.categories);

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
           dispatch(getCategories()); 
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

    /*****************************
     * 
     * EVENT HANDLERS
     * 
    *****************************/ 

    const handleImageUpload = e => {
        const image = e.target.files[0];

        setItemImage(image);
    }

    const handleItemSubmit = async e => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('itemName',itemName);
        formData.append('itemDesc',itemDesc);
        formData.append('itemPrice',itemPrice);
        formData.append('itemQuantity',itemQuantity);
        formData.append('itemCategory',itemCategory);
        formData.append('itemImage',itemImage);
        formData.append('itemFileName',itemFileName);
        formData.append('itemWeight',itemWeight);

        const config = {
            headers: {
                'Content-Type': 'mulitpart/form-data'
            }
        }

        await axios.put(`/api/item/${itemId}`, formData, config)
            .then(res => {
                history.push('/admin/dashboard/');
            })
            .catch(err => {
                console.log(err);
            });
    }

    /*****************************
     * 
     * VIEW RENDERERS
     * 
    *****************************/ 

    return (
        <Fragment>
			<AdminHeader />
			<div className='container my-3'>
				<div className='row'>
					<div className='col-md-8 mx-auto'>
						<Link to='/admin/dashboard'>
							<span className='fas fa-arrow-left'> Go Back</span>
						</Link>
						<div>
							<br />
							<div className='modal-content'>
								<form onSubmit={handleItemSubmit}>
									<div className='modal-header bg-warning text-white'>
										<h5 className='modal-title'>
											Update Item
										</h5>
									</div>
									<div className='modal-body my-2'>
										<Fragment>
											<label className='btn btn-dark mr-4'>
												Choose file
												<input
													type='file'
													name='itemImage'
													accept='images/*'
													hidden
													onChange={handleImageUpload}
												/>
											</label>
											{itemImage &&
											itemFileName ? (
												<span className='badge badge-secondary'>
													{itemFileName}
												</span>
											) : itemImage ? (
												<img
													className='img-thumbnail'
													style={{
														width: '120px',
														height: '80px',
													}}
													src={`../../../uploads/${itemFileName}`}
													alt='item'
												/>
											) : null}

											<div className='form-group'>
												<label className='text-secondary'>
													Name
												</label>
												<input
													type='text'
													className='form-control'
													name='itemName'
													value={itemName}
													onChange={e =>
														setItemName(
															e.target.value
														)
													}
												/>
											</div>
											<div className='form-group'>
												<label className='text-secondary'>
													Description
												</label>
												<textarea
													className='form-control'
													rows='3'
													name='itemDesc'
													value={itemDesc}
													onChange={e =>
														setItemDesc(
															e.target.value
														)
													}
												></textarea>
											</div>
											<div className='form-group'>
												<label className='text-secondary'>
													Price
												</label>
												<input
													type='text'
													className='form-control'
													name='itemPrice'
													value={itemPrice}
													onChange={e =>
														setItemPrice(
															e.target.value
														)
													}
												/>
											</div>
											<div className='form-row'>
												<div className='form-group col-md-6'>
													<label className='text-secondary'>
														Category
													</label>
													<select
														className='custom-select mr-sm-2'
														name='itemCategory'
														value={itemCategory}
														onChange={e =>
															setItemCategory(
																e.target.value
															)
														}
													>
														<option value=''>
															Choose one...
														</option>
														{categories &&
															categories.map(
																c => (
																	<option
																		key={
																			c._id
																		}
																		value={
																			c._id
																		}
																	>
																		{
																			c.category
																		}
																	</option>
																)
															)}
													</select>
												</div>

												<div className='form-group col-md-6'>
													<label className='text-secondary'>
														Quantity
													</label>
													<input
														type='number'
														className='form-control'
														min='0'
														max='1000'
														name='itemQuantity'
														value={itemQuantity}
														onChange={e =>
															setItemQuantity(
																e.target.value
															)
														}
													/>
												</div>
											</div>
										</Fragment>
									</div>
									<div className='modal-footer'>
										<button
											type='submit'
											className='btn btn-warning text-white'
										>
											Submit
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
    );
}

export default AdminEditItem;