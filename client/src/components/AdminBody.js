import React from 'react';
import Card from './Card';
//redux
import {useSelector} from 'react-redux';

const AdminBody = () => {
    /*****************************
     * 
     * REDUX GLOBAL STATE PROPS
     * 
    *****************************/  

    const {items} = useSelector(state => state.items);

    return (
        <div className='container'>
            <div className='row'>
                <div className='card-deck'>
                    {items && items.map(item => (
                        <Card key={item._id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AdminBody;