import FetchData from '../Data/FetchData';
import { Link } from 'react-router-dom';
const Home = () => {
  const { data, error, isLoading } = FetchData(
    'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey='
  );

  return (
    <div className='Home'>
      {error && <div> {error}</div>}
      {isLoading && <div> Loading....</div>}
      {data.length > 0 && (
        <div>
          <div className='carsol-container'>
            <img src={data[0].urlToImage} alt='' title={data[0].title} />

            {/* <Link to={{ pathname: data[1].url }} target='_blank'> */}

            <div className='title-container'>
              <Link to={{ pathname: '/Artical', state: { data: data[0] } }}>
                <h3>{data[0].title}</h3>
              </Link>
              <p>{data[0].description}</p>
            </div>
          </div>
          <div className='card-container'>
            {data.slice(1).map((data, i) => {
              return (
                <div className='card' key={i}>
                  <Link to={{ pathname: '/Artical', state: { data: data } }}>
                    <img
                      src={data.urlToImage}
                      alt='new-img'
                      title={data.title}
                    />
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
        </div>
      )}
    </div>
  );
};

export default Home;
