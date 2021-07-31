import { Link, NavLink } from 'react-router-dom';
import logo from '../Style/Logo.png';
const Nav = () => {
  return (
    <div className='navbar'>
      <img src={logo} width='40' height='40' alt='' />
      <Link to='/'>
        <h1 className=''>Big News</h1>{' '}
      </Link>
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
