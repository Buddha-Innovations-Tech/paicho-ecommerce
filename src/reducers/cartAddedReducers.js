import { CART_ADD_ITEM } from "../constants/cartConstants";
import {
  CART_SUBTRACT_ITEM,
  CART_ADDITION_ITEM,
  CART_REMOVE_ITEM,
  CART_REMOVEALL_ITEM,
  CART_SAVESHIPPING_ADDRESS,
} from "../constants/cartConstants";

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case "CART_ADD_ITEM":
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.id === item.id);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === item.id
              ? {
                  ...x,
                  qty: Number(x.qty + 1),
                }
              : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case "CART_SUBTRACT_ITEM":
      const itemToSubtract = action.payload;
      const exists = state.cartItems.find((x) => x.id === itemToSubtract.id);

      if (exists && exists.qty > 1) {
        return {
          ...state,
          loading: false,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === exists.id
              ? {
                  ...cartItem,
                  qty: cartItem.qty - 1,
                }
              : cartItem
          ),
          itemSubtracted: exists.name,
          itemAdded: null,
          toastShow: true,
        };
      }
      if (exists && exists.qty === 1) {
        return {
          ...state,
          loading: false,
          cartItems: state.cartItems.filter(
            (cartItem) => cartItem.id !== action.payload.id
          ),
          itemSubtracted: itemToSubtract.name,
          toastShow: true,
        };
      }
    case "CART_ADDITION_ITEM":
      const itemToAdd = action.payload;
      const existAdd = state.cartItems.find((x) => x.id === itemToAdd.id);

      if (existAdd) {
        return {
          ...state,
          loading: false,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === existAdd.id
              ? {
                  ...cartItem,
                  qty: cartItem.qty + 1,
                }
              : cartItem
          ),
        };
      }
      if (existAdd) {
        return {
          ...state,
          loading: false,
          cartItems: state.cartItems.filter(
            (cartItem) => cartItem.id !== action.payload.id
          ),
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload),
      };
    case CART_SAVESHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case CART_REMOVEALL_ITEM:
      return {
        cartItems: [],
      };

    default:
      return state;
  }
};
