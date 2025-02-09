import { useEffect } from 'react';
//import { fetchContacts } from '../redux/contactsOps';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import HomePage from '../pages/HomePage/HomePage';
import Contacts from '../pages/Contacts/Contacts';
import NotFound from '../pages/NotFound/NotFound';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import { refreshUser } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';
import PrivateRoute from './PrivateRoutes';
import PublicRoute from './PublicRoute';


const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* <Route path="/contacts" element={<Contacts />} /> */}
        <Route path="/contacts" element={<PrivateRoute > <Contacts /> </PrivateRoute>} />
      </Route>
      {/* <Route path="/register" element={<Register />} /> */}
      <Route path="/register" element={<PublicRoute> <Register /></PublicRoute>} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
