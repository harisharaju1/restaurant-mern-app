import React, {useEffect} from 'react';
import AdminHeader from './AdminHeader';
import AdminActionBtns from './AdminActionBtns';
import AdminCategoryModal from './AdminCategoryModal';
import AdminItemModal from './AdminItemModal';
import AdminBody from './AdminBody';
//redux
import {useDispatch} from 'react-redux';
import {getCategories} from '../redux/actions/categoryActions';
import {getItems} from '../redux/actions/itemActions';

const AdminDashboard = () => { 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    },[dispatch]);

    useEffect(() => {
        dispatch(getItems());
    },[dispatch]);

    return (
        <section>
            <AdminHeader/>
            <AdminActionBtns/>
            <AdminCategoryModal/>
            <AdminItemModal/>
            <AdminBody/>
        </section>
    );
};

export default AdminDashboard;