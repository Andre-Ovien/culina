import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import { IoMdArrowBack } from "@react-icons/all-files/io/IoMdArrowBack"; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

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

  const handleAddToCart = () => {
    addToCart(dish, quantity);
    toast.success(`${dish.name} (${quantity}) added to cart!`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: 'custom-toast',
      bodyClassName: 'custom-toast-body',
      closeButton: false
    });
  };

  return (
    <div className='product-details'>
      <IoMdArrowBack onClick={handleBack} style={{ cursor: 'pointer', fontSize: '24px', marginBottom: '20px' }} />

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

        <button className='add-to-cart' onClick={handleAddToCart}>
          Add {quantity} to Cart
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ProductDetails;
