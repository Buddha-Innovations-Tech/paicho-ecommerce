import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { wishlistCreateReducer } from "./reducers/wishListReducers";
import {
  subscriberLoginReducer,
  subscriberRegisterReducer,
  subscriberDetailsReducer,
  subscriberUpdateReducer,
  billingAddressUpdateReducer,
} from "./reducers/subscriberReducers";

import { categoryListReducer } from "./reducers/categoryReducers";

import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";

import { carouselListReducer } from "./reducers/carouselReducers";

import { cartReducer } from "./reducers/cartAddedReducers";
import { wishlistDeleteReducer,allWishlistDeleteReducer } from "./reducers/wishListReducers";
import { orderCreateReducer, orderListReducer } from "./reducers/orderReducers";

const reducer = combineReducers({
  subscriberLogin: subscriberLoginReducer,
  subscriberRegister: subscriberRegisterReducer,
  subscriberDetails: subscriberDetailsReducer,
  subscriberUpdate: subscriberUpdateReducer,
  billingAddressUpdate: billingAddressUpdateReducer,

  categoryList: categoryListReducer,

  productList: productListReducer,
  productDetails: productDetailsReducer,

  carouselList: carouselListReducer,

  cart: cartReducer,
  wishlistCreate: wishlistCreateReducer,
  
  wishlistDelete: wishlistDeleteReducer,
  orderCreate: orderCreateReducer,
  orderList: orderListReducer,
  allWishlistDelete:allWishlistDeleteReducer
});

const middleware = [thunk];
const subscriberInfoFromStorage = localStorage.getItem("subscriberInfo")
  ? JSON.parse(localStorage.getItem("subscriberInfo"))
  : null;
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};
const initialState = {
  subscriberLogin: { subscriberInfo: subscriberInfoFromStorage },
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
};
// const initialState = {
//   userLogin: { userInfo: userInfoFromStorage },
// };

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
