import axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstants";
import {
  CART_SUBTRACT_ITEM,
  CART_ADDITION_ITEM,
  CART_REMOVE_ITEM,
  CART_REMOVEALL_ITEM,
  CART_SAVESHIPPING_ADDRESS,
} from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
 
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      id: data._id,
      name: data.name,
      category: data.category.name,
      price: data.price,
      qty,
      image: data.image,
      discount: data.discount,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  // return {
  //   type: "ADD_CART",
  //   payload: item,
  // };
};
// export const dltCart = (id) => {
//   return {
//     type: "DELETE_CART",
//     payload: id,
//   };
// };
export const subtractFromCart = (id) => async (dispatch, getState) => {
  dispatch({ type: "ADD_TO_CART_REQUEST", payload: id });
  try {
    const { data } = await axios.get(`/api/products/${id}/`);
    dispatch({
      type: CART_SUBTRACT_ITEM,
      payload: {
        id: data._id,
        name: data.name,
        category: data.category.name,
        price: data.price,
        image: data.image,
        discount: data.discount,
      },
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    console.error(error);
    dispatch({ type: "ADD_TO_CART_ERROR", payload: error.message });
  }
};
export const addFromCart = (id) => async (dispatch, getState) => {
  dispatch({ type: "ADD_TO_CART_REQUEST", payload: id });
  try {
    const { data } = await axios.get(`/api/products/${id}/`);
    dispatch({
      type: CART_ADDITION_ITEM,
      payload: {
        id: data._id,
        name: data.name,
        category: data.category.name,
        price: data.price,
        image: data.image,
        discount: data.discount,
      },
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    console.error(error);
    dispatch({ type: "ADD_TO_CART_ERROR", payload: error.message });
  }
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
export const removeAllCart = () => (dispatch, getState) => {
  localStorage.removeItem("cartItems");
  dispatch({
    type: CART_REMOVEALL_ITEM,
  });
};

export const saveShippingAddress = (data) => (dispatch, getState) => {
  dispatch({
    type: CART_SAVESHIPPING_ADDRESS,
    payload: data,
  });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};
