import React, { useEffect, useState,useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import { IoMdArrowBack } from "@react-icons/all-files/io/IoMdArrowBack"; 

const ProductDetails = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const { id } = useParams();
  const [dish, setDish] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch('/Dishes.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(item => item.id == id);
        setDish(found);
      });
  }, [id]);

  if (!dish) return <p>Loading...</p>;

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className='product-details'>
      <IoMdArrowBack onClick={handleBack} style={{ cursor: 'pointer', fontSize: '24px', }} />

      <div className='left'>
        <img src={dish.image} alt={dish.name} />
      </div>

      <div className='right'>
        <h2>{dish.name}</h2>
        <h3>#{dish.price}</h3>
        <p>{dish.description}</p>

        <div className='quantity'>
          <p>Quantity:</p>
          <div className='quantity-controls'>
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div>
        </div>

        <button className='add-to-cart' onClick={() => addToCart(dish, quantity)} >
          Add {quantity} to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
