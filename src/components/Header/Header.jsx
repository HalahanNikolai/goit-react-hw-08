
import { AppBar, Toolbar, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/authSelectors';
import { logoutThunk } from '../../redux/auth/authOperations';

//* name(pin): "Vasya"
//* email(pin): "vasya_qwerty@gmail.com"

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  // console.log('Login:', isLoggedIn)
  const dispatch = useDispatch();
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'rgba(16, 20, 24, 0.8)',
        backdropFilter: 'blur(8px)',
        // zIndex: '-1',
      }}
    >
      <Container maxWidth="xl"  >
        <Toolbar disableGutters >
          {/* <h2 >Redux toolkit + Selectors</h2> */}
          {isLoggedIn && <h2 className='px-10' >Welcome, <span className='text-green-200 px-3 text-xl'>  {user.name}</span></h2>}

          <nav className='flex gap-10'>
            < NavLink to='/'>Home</NavLink>
            < NavLink to='/contacts'>Contacts</NavLink>
            {/* {isLoggedIn ? < NavLink to='/contacts'>Contacts</NavLink> : redirect('/home')} */}
            {isLoggedIn ? (
              <button className='cursor-pointer' onClick={() => dispatch(logoutThunk())}>Logout</button>
            ) : (
              <>
                < NavLink to='/register'>Register</NavLink>
                < NavLink to='/login'>Login</NavLink>
              </>
            )}
          </nav>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
