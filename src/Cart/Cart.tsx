// style
import { Wrapper } from "./Cart.style";
// type
import { CartItemType } from "../types";
// components
import CartItem from "../CartItem/CartItem";
import React from "react";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};
const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <h3>Your Shopping Cart</h3>
      {cartItems.length === 0 ? <p>No Item In Cart</p> : null}
      {cartItems.map((item) => (
        <CartItem
          item={item}
          key={item.id}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </Wrapper>
  );
};

export default Cart;
