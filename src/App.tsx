import { useState } from "react";
import { useQuery } from "react-query";
// components
import Item from "./Item/Item";
import Drawer from "@mui/material/Drawer";
import LinearProgress from "@mui/material/LinearProgress";
import Grid from "@mui/material/Grid";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Badge from "@mui/material/Badge";

// styles
import { Wrapper } from "./App.styled";
import { promises } from "dns";

// types
import { CartItemType } from "./types";

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("http://fakestoreapi.com/products")).json();

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  console.log(data);
  const getTotalItems = () => null;
  const handelAddToCart = (clickedItem: CartItemType) => null;
  const handelRemoveFromCart = () => null;
  if (isLoading) return <LinearProgress />;
  if (error) return <div>somthing went error ...</div>;
  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}></Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
