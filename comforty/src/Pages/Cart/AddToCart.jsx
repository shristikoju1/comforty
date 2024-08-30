import { useContext, React } from "react";
import "./Cart.css";
// import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  // const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  // placeOrder maa jana lai react router ko useNavigate hook use gareko
  // const navigate = useNavigate();

  return (
    <div className="cart max-width">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Reduce Count</p>
        </div>

        <br />
        <hr />

        {/* if food item is available in the cart item, then display on the cart page */}
        {/* {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <p>{item.name}</p> 
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  unit price
                  <p>{item.price}</p>
                  quantity
                  <p>{cartItems[item._id]}</p>
                  total price
                  <p>{item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => {
                      removeFromCart(item._id);
                    }}
                    className="cross"
                  >
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })} */}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>

          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              {/* <p>${getTotalCartAmount()}</p> */}
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              {/* aba items nai nahuda kheri total amount ni zero hunxa, yesto amount zero huda delivery ni nahunu paryo, so 0 */}
              {/* <p>${getTotalCartAmount() === 0 ? 0 : 2}</p> */}
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                {/* ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2} */}
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