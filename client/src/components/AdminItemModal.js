import React, {useState, Fragment} from 'react';
import {showErrorMsg,showSuccessMsg} from '../helpers/message';
import {showLoading} from '../helpers/loading';
import isEmpty from 'validator/lib/isEmpty';
//redux
import {useSelector, useDispatch} from 'react-redux';
import {clearMessages} from '../redux/actions/messageActions';
import {createItem} from '../redux/actions/itemActions'

const AdminItemModal = () => {
    /*****************************
     * 
     * REDUX GLOBAL STATE PROPS
     * 
    *****************************/  

    const {loading} = useSelector(state => state.loading);
    const {successMsg, errorMsg} = useSelector(state => state.messages);
    const {categories} = useSelector(state => state.categories);

    const dispatch = useDispatch();

    /*****************************
     * 
     * COMPONENT STATE PROPS
     * 
    *****************************/    
    const [clientSideErrorMsg, setClientSideErrorMsg] = useState('');
    const [itemData, setItemData] = useState({
        itemName: '',
        itemDesc :'',
        itemPrice: '',
        itemQuantity: '',
        itemCategory: '',
        itemWeight: '',
        itemImage: null,
        itemFileName: ''
    });
    const {itemName,itemDesc,itemPrice,itemQuantity,itemCategory,itemWeight,itemImage} = itemData;    

    /***************************
     * 
     * EVENTHANDLERS
     *
     **************************/ 

    const handleMessages = () => {
        dispatch(clearMessages());
        setClientSideErrorMsg('');
    };

    const handleItemChange = evt => {
        setItemData({
            ...itemData,
            [evt.target.name]: evt.target.value,
        });
    }

    const handleItemImage = evt => {
        setItemData({
            ...itemData,
            [evt.target.name]: evt.target.files[0],
        })
    }    

    const handleItemSubmit = evt => {
        evt.preventDefault(); 
        
        if (itemImage === null){
            setClientSideErrorMsg('Please select an image');
        } else if (isEmpty(itemName) || isEmpty(itemPrice) || isEmpty(itemQuantity) || isEmpty(itemCategory) || isEmpty(itemWeight)) {
            setClientSideErrorMsg('All fields are required');
        } else {
            let formData = new FormData();

            formData.append('itemName', itemName);
            formData.append('itemDesc', itemDesc);
            formData.append('itemPrice', itemPrice);
            formData.append('itemQuantity', itemQuantity);
            formData.append('itemCategory', itemCategory);
            formData.append('itemWeight', itemWeight);
            formData.append('itemImage', itemImage);            

            dispatch(createItem(formData));
            setItemData({
                itemName: '',
                itemDesc :'',
                itemPrice: '',
                itemQuantity: '',
                itemCategory: '',
                itemWeight: '',
                itemImage: null,
            });
        }
    }

    /*****************************
     * 
     * VIEW RENDERER
     * 
    *****************************/      

    return (
        <div id='addItemModal' className='modal' onClick={handleMessages}>
            <div className='modal-dialog modal-dialog-centered modal'>
                <div className='modal-content'>
                    <form onSubmit={handleItemSubmit}>
                        {/* modal header */}
                        <div className='modal-header bg-warning text-white'>
                            <h5 className='modal-title'>Add Item</h5>
                            <button className='close'>
                                <span><i className='fas fa-times' data-dismiss='modal'></i></span>
                            </button>
                        </div>
                        {/* modal header end */}
                        {/* modal body */}
                        <div className='modal-body my-2 container'>
                            {clientSideErrorMsg && showErrorMsg(clientSideErrorMsg)}   
                            {errorMsg && showErrorMsg(errorMsg)}
                            {successMsg && showSuccessMsg(successMsg)}                     
                            {
                                loading ? (
                                    <div className='text-center'>{showLoading()}</div>
                                ) : (
                                    <Fragment>
                                        {/* itemName */}
                                        <div className="form-group input-group">
                                            <input type='text' className='form-control' name='itemName' placeholder='Item Name' value={itemName} onChange={handleItemChange}></input>
                                        </div>
                                        {/* itemName */}
                                        {/* itemDesc */}
                                        <div className="form-group input-group">
                                            <textarea className='form-control' rows='3' placeholder='Item Description' name='itemDesc' value={itemDesc} onChange={handleItemChange}></textarea>
                                        </div>
                                        {/* itemDesc */}
                                        <div className='form-row'>
                                            {/* itemPrice */}
                                            <div className="form-group input-group col-md-6">                                      
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className='fas fa-rupee-sign'></i></span>
                                                </div>
                                                <input type="number" className="form-control" name='itemPrice' placeholder="Amount (to the nearest rupee)" value={itemPrice} onChange={handleItemChange} min='0'/>
                                                <div className="input-group-append">
                                                    <span className="input-group-text">.00</span>
                                                </div>
                                            </div>
                                            {/* itemPrice */} 
                                            {/* itemQuantity */}
                                            <div className="form-group input-group col-md-6">
                                                <input type="number" className="form-control" name='itemQuantity' placeholder="Number of items available" min='1' value={itemQuantity} onChange={handleItemChange}/>
                                            </div>
                                            {/* itemQuantity */}  
                                        </div>                                     
                                        <div className='form-row'>
                                            {/* itemCategory */}
                                            <div className='form-group col-md-6'>
                                                <select className='custom-select mr-sm-2' name='itemCategory' onChange={handleItemChange}>
                                                    <option value=''>Choose Category...</option>
                                                    {categories && categories.map((c) => (
                                                        <option key={c._id} value={c._id}>
                                                            {c.category}
                                                        </option>
                                                ))}
                                                </select>                                                
                                            </div>
                                        {/* itemCategory */}
                                        {/* itemWeight */}
                                            <div className='form-group input-group col-md-6'>
                                                <input type="number" className="form-control" name='itemWeight' value={itemWeight} placeholder="Enter Item Weight" onChange={handleItemChange}/>
                                            </div>
                                        {/* itemWeight */}
                                        {/* itemPurity */}
                                            {/* <div className='form-group input-group col-md-4'>
                                                <input type="text" className="form-control" name='itemPurity' value={itemPurity} placeholder="Item Purity defaulted to 18k if left empty" onChange={handleChange}/>
                                            </div> */}
                                        {/* itemPurity */}  
                                        </div>                             
                                        {/* itemImageFile */}
                                        <div className='custom-file'>
                                            <input type="file" className="custom-file-input" name='itemImage' onChange={handleItemImage}/>
                                            <label className='custom-file-label'>Choose File</label>
                                        </div>
                                        {/* itemImageFile */}
                                    </Fragment>
                                )
                            }                                                    
                        </div>
                        {/* modal body*/}
                        {/* modal footer */}
                        <div className='modal-footer'>
                            <button data-dismiss='modal' className='btn btn-secondary'>
                                Close
                            </button>
                            <button type='submit' className='btn btn-warning text-white'>
                                Submit
                            </button>
                        </div>
                        {/* modal footer */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminItemModal;