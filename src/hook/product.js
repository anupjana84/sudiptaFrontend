import { useEffect, useState } from 'react';
import { allProduct } from '../Api';


const useFetchAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController(); // Create an instance of AbortController
    const signal = controller.signal; 
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await allProduct({signal});
        setProducts(response.data.data.product); // Set categories state with response data
        isMounted && setLoading(false); // Set loading state to false
      } catch (error) {
        console.log(error,'errors')
        setError(error.response.data.message); // Set error state if request fails
        setLoading(false); // Set loading state to false
      }
    };

    fetchData();

    return () => {
      // Cleanup function (optional)
      isMounted = false;
      controller.abort();
    };
  }, []);

  return { products, loading, error };
};

export default useFetchAllProducts;
