import FetchData from '../Data/FetchData';
import { Link } from 'react-router-dom';
const Business = () => {
  const { data, error, isLoading } = FetchData(
    'https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey='
  );
  return (
    <div>
      {error && <div> {error}</div>}
      {isLoading && <div> Loading....</div>}
      {data.length > 0 && (
        <div className='card-container'>
          {data.slice(11).map((data, i) => {
            return (
              <div className='card' key={i}>
                <Link to={{ pathname: '/Artical', state: { data: data } }}>
                  <img src={data.urlToImage} alt='new-img' title={data.title} />
                  <div className='container'>
                    <h4>
                      <b>{data.title}</b>
                    </h4>
                    <p>{data.description}</p>
                  </div>
                </Link>
              </div>
            );
          })}{' '}
        </div>
      )}
    </div>
  );
};

export default Business;
