import axios from "axios";
import {
  CREATE_WISHLIST_REQUEST,
  CREATE_WISHLIST_SUCCESS,
  CREATE_WISHLIST_FAIL,
  DELETE_WISHLIST_REQUEST,
  DELETE_WISHLIST_SUCCESS,
  DELETE_WISHLIST_FAIL,
  DELETE_ALLWISHLIST_REQUEST,
  DELETE_ALLWISHLIST_SUCCESS,
  DELETE_ALLWISHLIST_FAIL,
} from "../constants/wishListConstants";
export const addToWishlist = (id) => async (dispatch, getState) => {
  try {
    const {
      subscriberLogin: { subscriberInfo },
    } = getState();

    dispatch({ type: CREATE_WISHLIST_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${subscriberInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `/api/subscribers/wishlists/${subscriberInfo._id}`,
      { product: id },

      config
    );
    dispatch({ type: CREATE_WISHLIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_WISHLIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const deleteSingleWishlist = (id) => async (dispatch, getState) => {
  try {
    const {
      subscriberLogin: { subscriberInfo },
    } = getState();
    dispatch({ type: DELETE_WISHLIST_REQUEST });
    const config = {
      headers: {
        Authorization: `Bearer ${subscriberInfo.token}`,
      },
    };
    await axios.delete(`/api/subscribers/wishlists/product/${id}`, config);
    dispatch({ type: DELETE_WISHLIST_SUCCESS });
  } catch (error) {
    dispatch({
      type: DELETE_WISHLIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const removeAllwhishlist = () => async(dispatch,getState) => {
  try {
    const {
      subscriberLogin: { subscriberInfo },
    } = getState();
    dispatch({ type: DELETE_ALLWISHLIST_REQUEST });
    const config = {
      headers: {
        Authorization: `Bearer ${subscriberInfo.token}`,
      },
    }
    await axios.delete(`/api/subscribers/wishlists/alldelete`, config);
    dispatch({ type: DELETE_ALLWISHLIST_SUCCESS });
  } catch (error) {
    dispatch({
      type: DELETE_ALLWISHLIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

