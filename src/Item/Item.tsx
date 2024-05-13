import Button from "@mui/material/Button";
// types
import { CartItemType } from "../types";
// style
import { Wrapper } from "./Item.style";

type Props = {
  item: CartItemType;
  handelAddToCart: (clickedItem: CartItemType) => void;
};
const Item: React.FC<Props> = ({ item, handelAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <Button onClick={() => handelAddToCart(item)}>Add to Cart</Button>
  </Wrapper>
);
export default Item;
