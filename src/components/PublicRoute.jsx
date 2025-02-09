import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/authSelectors';
import { Navigate } from 'react-router';


const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to="/contacts" /> : children;
};
export default PublicRoute;
