import React from "react";
import { useContext } from "react";
import { Cart } from "../context/Context";
import SingleProduct from "./SingleProduct";
import "./styles.css";
import Filters from "./Filters";

const Home = () => {
  const {
    state: { products },
    dispatch,
  } = useContext(Cart);
  // console.log(products);
  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {products.map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
