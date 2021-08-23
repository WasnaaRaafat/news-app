import { NavLink } from 'react-router-dom';
import logo from '../img/Logo.png';
const Nav = () => {
  return (
    <div className='navbar'>
      <div>
        <NavLink to='/'>
          <h1 className=''>
            <img
              className='logo'
              src={logo}
              width='40'
              height='40'
              alt='Logo'
            />
            Big News
          </h1>
        </NavLink>
      </div>
      <div className='links'>
        <NavLink className='nav-item' to='/'>
          Home
        </NavLink>
        <NavLink
          activeStyle={{ color: '#f28705' }}
          className='nav-item'
          to='/Sport'
        >
          Sport
        </NavLink>
        <NavLink
          activeStyle={{ color: '#f28705' }}
          className='nav-item'
          to='/Health'
        >
          Health
        </NavLink>
        <NavLink
          activeStyle={{ color: '#f28705' }}
          className='nav-item'
          to='/Business'
        >
          Business
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
