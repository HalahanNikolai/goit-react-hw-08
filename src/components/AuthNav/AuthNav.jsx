import { NavLink } from "react-router";
import styles from './AuthNav.module.css';

const AuthNav = () => {
    return (
        <div>
            <NavLink to="/register" className={styles.authLink}>
                Register
            </NavLink>
            <NavLink to="/login" className={styles.authLink}>
                Login
            </NavLink>
        </div>
    );
};

export default AuthNav;