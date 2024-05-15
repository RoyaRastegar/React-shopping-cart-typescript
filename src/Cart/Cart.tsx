// style
import { Wrapper } from "./Cart.style";
// type
import { CartItemType } from "../types";
// components
import CartItem from "../CartItem/CartItem";
import React from "react";
import Item from "../Item/Item";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};
const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const caculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  return (
    <Wrapper>
      <h3>Your Shopping Cart</h3>
      <hr />
      {cartItems.length === 0 ? <p>No Item In Cart</p> : null}
      {cartItems.map((item) => (
        <CartItem
          item={item}
          key={item.id}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h3>Total: ${caculateTotal(cartItems).toFixed(2)}</h3>
    </Wrapper>
  );
};

export default Cart;
