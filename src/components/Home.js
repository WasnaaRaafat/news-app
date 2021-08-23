import FetchData from '../Data/FetchData';
import { Link } from 'react-router-dom';
import Spinner from '../img/Spinner.gif';
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  const { data, error, isLoading } = FetchData(
    'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey='
  );

  return (
    <div className='Home'>
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
        <div>
          <div className='carousel-container'>
            <div>
              <Carousel infiniteLoop autoPlay>
                {data.slice(0, 4).map((data, i) => {
                  return (
                    <div key={i}>
                      <Link
                        to={{
                          pathname: '/Artical',
                          state: { data: data },
                        }}
                      >
                        <div className='image'>
                          <img src={data.urlToImage} alt={data.title} />
                        </div>
                        <div className='title-container'>
                          <h3>{data.title}</h3>
                          <p>{data.description}</p>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>

          {/* <Link to={{ pathname: data[1].url }} target='_blank'> */}

          <div className='card-container'>
            {data.slice(4).map((data, i) => {
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

                      <p>{data.description.substr(0, 100)}...</p>
                    </div>
                  </div>
                </Link>
              );
            })}{' '}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
