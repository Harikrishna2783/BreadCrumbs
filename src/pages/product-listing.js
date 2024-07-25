import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles.css"

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {loading && <>Loading...</>}
      <div className="product-grid">
        {!loading &&
          products?.map((product) => {
            return (
              <div key={product.id} className="product-card">
                <Link to={`/product/${product.id}`}>
                  <span>{product.title}</span>
                  <img src={product.thumbnail} alt={product.title} />
                  <span> $ {product.price} </span>
                </Link>
              </div>
            );
          })}
          </div>
      
    </div>
  );
};

export default ProductListing;
