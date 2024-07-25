import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles.css";

const Product = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      //console.log(data);
      setSingleProduct(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div>
      <h2>Product Details</h2>
      {loading && <>Loading...</>}
      {!loading && singleProduct && (
        <div className="product-card">
          <img src={singleProduct.thumbnail} alt="Product" />
          <h3>{singleProduct.title}</h3>
          <h3>$ {singleProduct.price}</h3>
          <p>{singleProduct.description}</p>
        </div>
      )}
    </div>
  );
};

export default Product;
