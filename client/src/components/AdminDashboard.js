import React, {useState, Fragment} from 'react';
import {createItem} from '../api/item';
import isEmpty from 'validator/lib/isEmpty';
import {showErrorMsg,showSuccessMsg} from '../helpers/message';
import {showLoading} from '../helpers/loading';

const AdminDashboard = () => {
    const [item, setItem] = useState('');
    const [errorMsg,setErrorMsg] = useState('');
    const [successMsg,setSuccessMsg] = useState('');
    const [loading,setLoading] = useState(false);
    /***************************
     * 
     * EVENTHANDLERS
     * 
     **************************/ 
    const handleMessages = () => {
        setErrorMsg('');
        setSuccessMsg('');
    };

    const handleItemChange = evt => {
        setErrorMsg('');
        setSuccessMsg('');
        setItem(evt.target.value);
    };

    const handleItemSubmit = evt => {
        evt.preventDefault();         

        if(isEmpty(item)){
            setErrorMsg('Please enter a name for item')            
        } else {
            const data = {item};        
        
            setLoading(true);            
            createItem(data)
            .then(response => {
                setLoading(false);
                setSuccessMsg(response.data.successMessage);
                setItem('');
            })
            .catch(err => {
                setLoading(false);
                setErrorMsg(err.response.data.errorMessage);
            });

            //setSuccessMsg('Added successfully');
        }
    }
    /**********************************
     * 
     * VIEW
     * 
    **********************************/ 
    const showHeader = () => (
        <div className='bg-dark text-white py-4'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1>
                            <i className='fas fa-home'> Dashboard</i>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );

    const showActionBtns = () => (
        <div className='bg-light my-2'>
            <div className='container'>
                <div className='row pb-3'>
                    <div className='col-md-4 my-1'>
                        <button className='btn btn-outline-info btn-lock' data-toggle='modal' data-target='#addItemModal'>
                            <i className='fas fa-plus'> Add Item</i>
                        </button>
                    </div>
                    <div className='col-md-4 my-1'>
                        <button className='btn btn-outline-info btn-lock'>
                            <i className='fas fa-edit'> Edit Item Details</i>
                        </button>
                    </div>
                    <div className='col-md-4 my-1'>
                        <button className='btn btn-outline-info btn-lock'>
                            <i className='fas fa-eye'> View Orders</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    const showItemModal = () => (
        <div id='addItemModal' className='modal' onClick={handleMessages}>
            <div className='modal-dialog modal-dialog-centered modal-lg'>
                <div className='modal-content'>
                    <form onSubmit={handleItemSubmit}>
                        <div className='modal-header bg-info text-white'>
                            <h5 className='modal-title'>Add Item</h5>
                            <button className='close'>
                                <span><i className='fas fa-times' data-dismiss='modal'></i></span>
                            </button>
                        </div>
                        <div className='modal-body my-2'>   
                            {errorMsg && showErrorMsg(errorMsg)}
                            {successMsg && showSuccessMsg(successMsg)}                     
                            {
                                loading ? (
                                    <div className='text-center'>{showLoading()}</div>
                                ) : (
                                    <Fragment>
                                        <label className='text-secondary'>Item</label>
                                        <input type='text' className='form-control' name='item' value={item} onChange={handleItemChange}></input>
                                    </Fragment>

                                )
                            }                                                    
                        </div>
                        <div className='modal-footer'>
                            <button data-dismiss='modal' className='btn btn-secondary'>
                                Close
                            </button>
                            <button type='submit' className='btn btn-info'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
    /*****************************
     * 
     * VIEW RENDERER
     * 
    *****************************/   
    return (
        <section>
            {showHeader()}
            {showActionBtns()}
            {showItemModal()}
        </section>
    );
};

export default AdminDashboard;