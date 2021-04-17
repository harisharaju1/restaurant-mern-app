import React, {useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Signup from './Signup';
import Signin from './Signin';
import Notfound from './Notfound';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import AdminRoute from './AdminRoute';
import UserRoute from './UserRoute';
import AdminEditItem from './AdminEditItem';
import ItemDetails from './ItemDetails';
import {useDispatch} from 'react-redux';
import {getItems} from '../redux/actions/itemActions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
        dispatch(getItems());
    },[dispatch]);
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/signin' component={Signin} />
          <UserRoute exact path='/user/dashboard' component={UserDashboard} />
          <Route exact path='/item/:itemId' component={ItemDetails} />
          <AdminRoute exact path='/admin/dashboard' component={AdminDashboard} />
          <AdminRoute exact path='/admin/edit/item/:itemId' component={AdminEditItem} />
          <Route component={Notfound} />
        </Switch>
      </main>
    </BrowserRouter>
  )
};

export default App;
