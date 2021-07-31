import { useEffect, useState } from 'react';
import axios from 'axios';
const FetchData = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(false);
    const api_key = process.env.REACT_APP_API_KEY;

    axios
      .get(url + api_key)
      .then((res) => {
        setData(res.data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setLoading(false);
        setData(false);
      });
  }, [url]);
  return { data, error, isLoading };
};

export default FetchData;
