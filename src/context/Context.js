import { useReducer } from "react";
import { faker } from "@faker-js/faker";
import cartReducer from "./Reducers";
import React from "react";
import { productReducer } from "../context/Reducers";

export const Cart = React.createContext();
faker.seed(99);
const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.abstract(600, 400, true),
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

  const productInitialState = {
    byStock: false,
    byFastDeliver: false,
    byRating: 0,
    searchQuery: "",
  };
  //for filter
  const [productState, productDispatch] = useReducer(
    productReducer,
    productInitialState
  );
  return (
    <>
      <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
        {children}
      </Cart.Provider>
    </>
  );
};

export default Context;

// export const CartState = () => {
//   return useContext(Cart);
// };
