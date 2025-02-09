import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/selectors';
import { Navigate } from 'react-router';


const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log('Log?:,', isLoggedIn)
  return isLoggedIn ? children : <Navigate to="/login" />;
};
export default PrivateRoute;