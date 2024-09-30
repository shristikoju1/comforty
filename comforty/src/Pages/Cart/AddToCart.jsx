import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeItemFromCart, updateItemQuantity } from "../../Store/cartSlice";
import "./Cart.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getTotalCartAmount = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price);
      return total + price * item.quantity;
    }, 0);
  };

  const handleRemoveFromCart = (index) => {
    dispatch(removeItemFromCart(index));
  };

  const handleQuantityChange = (index, newQuantity) => {
    dispatch(updateItemQuantity({ index, quantity: newQuantity }));
  };

  const handleProceedToCheckout = () => {
    toast.error("Login is required to proceed.");
    navigate("/login");
    window.scrollTo(0, 0);
  };

  return (
    <div className="cart max-width">
      <div className="cart-items">
        <table className="cart-items-title cart-items-item">
          <thead>
            <tr className="text-left">
              <th>Item</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove Item</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={item.thumbnail || item.image}
                    alt={item.title}
                    className="border border-gray-400 border-solid rounded-sm"
                  />
                </td>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    className="border border-[#ccc] p-1.5 rounded w-20"
                    onChange={(e) =>
                      handleQuantityChange(index, parseInt(e.target.value))
                    }
                  />
                </td>
                <td>${(parseFloat(item.price) * item.quantity).toFixed(2)}</td>
                <td
                  onClick={() => handleRemoveFromCart(index)}
                  className="cross"
                >
                  x
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total:</h2>
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
          <button onClick={handleProceedToCheckout}>PROCEED TO CHECKOUT</button>
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

      {/* ToastContainer must be rendered */}
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Cart;
