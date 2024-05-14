import Button from "@mui/material/Button";
// type
import { CartItemType } from "../types";
// style
import { Wrapper } from "./CartItem.style";

type Props = {
  item: CartItemType;
  key: number;
  removeFromCart: (id: number) => void;
  addToCart: (item: CartItemType) => void;
};
const CartItem: React.FC<Props> = ({ item, removeFromCart, addToCart }) => {
  return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <div className="information">
          <p>Price: ${item.price}</p>
          <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(item.id)}
          >
            -
          </Button>
          <p>{item.amount}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCart(item)}
          >
            +
          </Button>
        </div>
      </div>
      <img src={item.image} alt={item.title} />
    </Wrapper>
  );
};

export default CartItem;
