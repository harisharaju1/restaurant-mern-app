import React, {useState, Fragment} from 'react';
import {showErrorMsg,showSuccessMsg} from '../helpers/message';
import {showLoading} from '../helpers/loading';
import isEmpty from 'validator/lib/isEmpty';
//redux
import {useSelector, useDispatch} from 'react-redux';
import {clearMessages} from '../redux/actions/messageActions';
import {createCategory} from '../redux/actions/categoryActions';

const AdminCategoryModal = () => {
    /*****************************
     * 
     * REDUX GLOBAL STATE PROPS
     * 
    *****************************/  

    const {successMsg, errorMsg} = useSelector(state => state.messages);
    const {loading} = useSelector(state => state.loading);

    const dispatch = useDispatch();

    /*****************************
     * 
     * COMPONENT STATE PROPS
     * 
    *****************************/ 
    const [category,setCategory] = useState('');
    const [clientErrorMsg, setClientErrorMsg] = useState('');

    /***************************
     * 
     * EVENTHANDLERS
     *
     **************************/ 

    const handleMessages = () => {
        dispatch(clearMessages());
    };

    const handleCategoryChange = evt => {
        dispatch(clearMessages());
        setCategory(evt.target.value);
    }

    const handleCategorySubmit = evt => {
        evt.preventDefault();        
        if(isEmpty(category)){
            setClientErrorMsg('Category Name cannot be empty');
        } else {
            const data = {category};
            dispatch(createCategory(data));
            setCategory('');
        }        
    }

    /*****************************
     * 
     * VIEW RENDERER
     * 
    *****************************/  

    return(    
        <div id='addCategoryModal' className='modal' onClick={handleMessages}>
            <div className='modal-dialog modal-dialog-centered modal-lg'>
                <div className='modal-content'>
                    <form onSubmit={handleCategorySubmit}>
                        {/* modal header */}
                        <div className='modal-header bg-info text-white'>
                            <h5 className='modal-title'>Add Category</h5>
                            <button className='close'>
                                <span><i className='fas fa-times' data-dismiss='modal'></i></span>
                            </button>
                        </div>
                        {/* modal header end */}
                        {/* modal body */}
                        <div className='modal-body my-2 container'>   
                            {clientErrorMsg && showErrorMsg(clientErrorMsg)}
                            {errorMsg && showErrorMsg(errorMsg)}
                            {successMsg && showSuccessMsg(successMsg)}                     
                            {
                                loading ? (
                                    <div className='text-center'>{showLoading()}</div>
                                ) : (
                                    <Fragment>
                                        {/* category */}
                                        <div className="form-group input-group">
                                            <input type='text' className='form-control' name='category' value={category} placeholder='Category Name' onChange={handleCategoryChange}></input>
                                        </div>
                                        {/* category */}                                        
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
                            <button type='submit' className='btn btn-info'>
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
export default AdminCategoryModal;