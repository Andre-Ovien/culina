import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from "@react-icons/all-files/io/IoMdArrowBack"; 
import { MdOutlineCancel } from "react-icons/md";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();


  const handleBack =()=>{
    navigate(-1);
  }

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = 500;
  const total = subtotal + deliveryFee;

  return (
    <div className="cart-page">

      <div className='mainn'>
        <IoMdArrowBack onClick={handleBack} />
        <h2>Your Cart</h2>
      </div>
      
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} width={60} />
            <div>
              <h3>{item.name}</h3>
              <p>#{item.price}</p>
              <div className="quantity-control">
                <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>-</button>
                <span>{item.quantity}</span>
                <div className='plu'><button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button></div>
              </div>
            </div>
            <button onClick={() => removeFromCart(item.id)}>
              <MdOutlineCancel />

            </button>
          </div>
        ))}
      </div>

      <div className="order-summary">
        <p>Subtotal: #{subtotal.toFixed(2)}</p>
        <p>Delivery Fee: #{deliveryFee.toFixed(2)}</p>
        <h3>Total: #{total.toFixed(2)}</h3>
        <button onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
