import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import cartReducer from "./Reducers";
import React from "react";

export const Cart = React.createContext();
const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.abstract(1234, 2345, true),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));
  const initialState = {
    products: products,
    cart: [],
  };
  // console.log(products);
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <>
      <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>
    </>
  );
};

export default Context;

// export const CartState = () => {
//   return useContext(Cart);
// };
