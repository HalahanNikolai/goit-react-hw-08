
import { Toolbar, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
// import { logoutThunk } from '../../redux/auth/operations';
import styles from './AppBar.module.css';
import AuthNav from '../AuthNav/AuthNav.JSX';
import UserMenu from '../UserMenu/UserMenu';
//* name(pin): "Vasya"
//* email(pin): "vasya_qwerty@gmail.com"

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  // const dispatch = useDispatch();
  return (
    <header className={styles.header}>
      <Container maxWidth="xxl"  >
        <Toolbar className='w-7x1 ' >
          {/* <h2 >Redux toolkit + Selectors</h2> */}
          {isLoggedIn && <h2 className='px-10  text-xl' >Welcome, <span className='text-green-800 px-3 text-xl'>  {user.name}</span></h2>}

          <nav className=' flex gap-10 items-center text-xl  '>
            < NavLink to='/'>Home</NavLink>
            {isLoggedIn && < NavLink to='/contacts'>Contacts</NavLink>}
            {isLoggedIn ?
              <UserMenu />
              :
              <AuthNav />
            }
          </nav>

        </Toolbar>
      </Container>
    </header>
  );
};

export default AppBar;
