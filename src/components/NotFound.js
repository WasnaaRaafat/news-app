import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found content'>
      <div>
        <h2>Sorry</h2>
        <p>This page does not exists</p>
        <Link to='/' className=''>
          Go back to home page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
