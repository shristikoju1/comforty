import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeItemFromCart, updateItemQuantity } from '../../Store/cartSlice';
import './Cart.scss';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getTotalCartAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleRemoveFromCart = (index) => {
    dispatch(removeItemFromCart(index));
  };

  const handleQuantityChange = (index, newQuantity) => {
    dispatch(updateItemQuantity({ index, quantity: newQuantity }));
  };

  return (
    <div className='cart max-width'>
      <div className='cart-items'>
        <table className='cart-items-title cart-items-item'>
          <thead>
            <tr className='text-left'>
              <th>Item</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Reduce Count</th>
            </tr>
          </thead>

          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>
                  <img src={item.image} alt={item.title} />
                </td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <input
                    type='number'
                    min={1}
                    value={item.quantity}
                    className='border border-[#ccc] p-1.5 rounded w-20'
                    onChange={(e) =>
                      handleQuantityChange(index, parseInt(e.target.value))
                    }
                  />
                </td>
                <td>${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</td>
                <td
                  onClick={() => handleRemoveFromCart(index)}
                  className='cross'
                >
                  x
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* <div className='cart-items-title'>
          <p>Item</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Reduce Count</p>
        </div>

        <br />
        <hr />

        {cartItems.map((item, index) => (
          <div key={index}>
            <div className="cart-items-title cart-items-item">
              <p>{item.title}</p>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
              <p>{item.price * item.quantity}</p>
              <p
                onClick={() => handleRemoveFromCart(index)}
                className="cross"
              >
                x
              </p>
            </div>
            <hr />
          </div>
        ))} */}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>

          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>

          <button onClick={() => navigate("/order")}>
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="cart-promocode">
          <div>
            <p>Got a promo code? Enter it here!</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="PROMO CODE" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
