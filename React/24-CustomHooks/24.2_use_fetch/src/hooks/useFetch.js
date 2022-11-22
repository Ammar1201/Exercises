import { useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error('Error fetching');
      }

      const data = await res.json();
      setData(data);
      setIsLoading(false);
    }
    catch (error) {
      setError(error.message);
    };
  }
  // fetchData();

  return { data, isLoading, error, fetchData };
};

export default useFetch;