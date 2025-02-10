import { Outlet } from 'react-router';

import AppBar from '../AppBar/AppBar';


function Layout() {
  return (
    <>
      <AppBar className='' />
      <Outlet />
    </>
  );
}
export default Layout;
