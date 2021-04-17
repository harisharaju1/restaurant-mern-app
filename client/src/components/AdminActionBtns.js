import React from 'react';

const showActionBtns = () => (
    <div className='bg-light my-2'>
        <div className='container'>
            <div className='row pb-3'>
                <div className='col-md-4 my-1'>
                    <button className='btn btn-outline-info btn-lock' data-toggle='modal' data-target='#addCategoryModal'>
                        <i className='fas fa-edit'> Add Category</i>
                    </button>
                </div>
                <div className='col-md-4 my-1'>
                    <button className='btn btn-outline-warning btn-lock' data-toggle='modal' data-target='#addItemModal'>
                        <i className='fas fa-plus'> Add Item</i>
                    </button>
                </div>                    
                <div className='col-md-4 my-1'>
                    <button className='btn btn-outline-success btn-lock'>
                        <i className='fas fa-eye'> View Orders</i>
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default showActionBtns;