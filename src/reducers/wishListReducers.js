import {
  CREATE_WISHLIST_REQUEST,
  CREATE_WISHLIST_SUCCESS,
  CREATE_WISHLIST_FAIL,
  DELETE_WISHLIST_REQUEST,
  DELETE_WISHLIST_SUCCESS,
  DELETE_WISHLIST_FAIL,
  WISHLIST_REMOVE_ITEM,
} from "../constants/wishListConstants";
export const wishlistCreateReducer = (state = { whistlist: [] }, action) => {
  switch (action.type) {
    case CREATE_WISHLIST_REQUEST:
      return { loading: true };
    case CREATE_WISHLIST_SUCCESS:
      return {
        loading: false,
        success: true,
        whistlist: action.payload.wishlists,
      };
    case CREATE_WISHLIST_FAIL:
      return { loading: false, error: action.payload };

    // case WISHLIST_REMOVE_ITEM:
    //   return {
    //     ...state,
    //     whistlist: state.whistlist.filter((x) => x.id !== action.payload),
    //   };
    default:
      return state;
  }
};
export const wishlistDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_WISHLIST_REQUEST:
      return { loading: true };
    case DELETE_WISHLIST_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case DELETE_WISHLIST_FAIL:
      return { loading: false, error: action.payload };

    // case WISHLIST_REMOVE_ITEM:
    //   return {
    //     ...state,
    //     whistlist: state.whistlist.filter((x) => x.id !== action.payload),
    //   };
    default:
      return state;
  }
};
