import FetchData from '../Data/FetchData';
import { Link } from 'react-router-dom';
import Spinner from '../img/Spinner.gif';

const Business = () => {
  const { data, error, isLoading } = FetchData(
    'https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey='
  );
  return (
    <div>
      {error && (
        <div className='error-text not-found'>
          <h3>
            {error}
            <br />
            Opps, Something went wrong, Try again.
          </h3>
        </div>
      )}
      {isLoading && (
        <div className='spinner'>
          <img src={Spinner} alt='waiting to load data' />
        </div>
      )}
      {data.length > 0 && (
        <div className='card-container'>
          {data.slice(11).map((data, i) => {
            return (
              <Link to={{ pathname: '/Artical', state: { data: data } }}>
                <div className='card' key={i}>
                  <img src={data.urlToImage} alt={data.title} />
                  <div className='container'>
                    <h5>
                      <b className='card-title'>
                        {data.title.substr(0, 80)}...
                      </b>
                    </h5>
                    <p>{data.description.substr(0, 100)}</p>
                  </div>
                </div>
              </Link>
            );
          })}{' '}
        </div>
      )}
    </div>
  );
};

export default Business;
