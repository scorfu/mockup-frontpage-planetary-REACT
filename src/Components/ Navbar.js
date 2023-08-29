import 'bootstrap/dist/css/bootstrap.css';
import classes from './Navbar.module.css';
import webSiteLogo from '../assets/COSMOS.png';
import homeLogo from '../assets/Home.png';
import destinationLogo from '../assets/Destination.png';
import spaceshipLogo from '../assets/Spaceship.png';
// import cartLogo from '../assets/Cart.png';
import Cart from './Cart';

import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const cartItems = useSelector(state => state.cart.length);

    return (
        <nav className={classes.navig}>
            <ul className={classes.nav__list}>
                <NavLink className={classes.nav__item} to="/">
                    <a>
                        <img src={webSiteLogo} alt="Logo" />
                    </a>
                </NavLink>

                <NavLink className={classes.nav__item} to="/">
                    <a>
                        <img src={homeLogo} alt="Home" />
                        <span className={classes.nav__text}>Home</span>
                    </a>
                </NavLink>

                <NavLink className={classes.nav__item} to="/destinations">
                    <a>
                        <img src={destinationLogo} alt="Destinations image" />
                        <span className={classes.nav__text}>Destinations</span>
                    </a>
                </NavLink>

                <NavLink className={classes.nav__item} to="/spaceships">
                    <a>
                        <img src={spaceshipLogo} alt="Spaceship image" />
                        <span className={classes.nav__text}>Spaceships</span>
                    </a>
                </NavLink>

                <NavLink className={classes.nav__item}>
                    <a href="#">
                        {/* <img src={cartLogo} alt="" /> */}
                        <Cart />
                        <span className={[classes.nav__text, classes.cart__items__number]}>{cartItems}</span>
                    </a>
                </NavLink>
            </ul>
        </nav>
    )
};

export default Navbar;