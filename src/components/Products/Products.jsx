import React from "react";
import { Grid } from "@mui/material";
import Product from "./Product/Product";
const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Runnig Shoes",
    price: "$5",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: 2,
    name: "MacBook",
    description: "Apple MacBook",
    price: "$15",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&w=1000&q=80",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} ig={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
