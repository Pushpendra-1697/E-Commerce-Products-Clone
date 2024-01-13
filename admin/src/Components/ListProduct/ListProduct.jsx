import { useEffect, useState } from 'react';
import './ListProduct.css';
import cross_icon from '../../assets/cross_icon.png';
import { backendURL } from '../../backendurl';

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetchInfo();
  }, []);
  const fetchInfo = async () => {
    await fetch(`${backendURL}/allproducts`).then((res) => res.json()).then((data) => data.success && setAllProducts(data.products));
  };
  const removeProduct = async (id) => {
    await fetch(`${backendURL}/removeproduct`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({ id })
    });
    await fetchInfo();
  };
  return (
    <div className='list-product'>
      <h1>All Product List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts?.map((product, index) => {
          return <>
            <div className='listproduct-format-main listproduct-format' key={index}>
              <img className='listproduct-product-icon' src={product.image} alt='' />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img className='listproduct-remove-icon' src={cross_icon} alt='' onClick={() => removeProduct(product.id)} />
            </div>
            <hr />
          </>
        })}
      </div>
    </div>
  );
}

export default ListProduct;