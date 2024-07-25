import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles.css"

const Home = () => {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const fetchedData = data.products.slice(0, 6);
    setProducts(fetchedData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="product-grid">
        {products?.map((product) => {
          return (
            <div key={product.id} className="product-card">
              <span>{product.title}</span>
              <img src={product.thumbnail} alt={product.title} />
              <span> $ {product.price} </span>
            </div>
          );
        })}
      </div>
      <Link to="/product">
        {" "}
        <button> View All Products </button>{" "}
      </Link>
    </div>
  );
};

export default Home;
