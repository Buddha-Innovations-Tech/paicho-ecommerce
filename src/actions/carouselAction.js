import axios from "axios";

import {
  CAROUSEL_CREATE_FAIL,
  CAROUSEL_CREATE_REQUEST,
  CAROUSEL_CREATE_SUCCESS,
  CAROUSEL_DELETE_FAIL,
  CAROUSEL_DELETE_REQUEST,
  CAROUSEL_DELETE_SUCCESS,
  CAROUSEL_LIST_FAIL,
  CAROUSEL_LIST_REQUEST,
  CAROUSEL_LIST_SUCCESS,
  CAROUSEL_UPDATE_REQUEST,
  CAROUSEL_UPDATE_SUCCESS,
  CAROUSEL_UPDATE_FAIL,
  CAROUSEL_DETAILS_REQUEST,
  CAROUSEL_DETAILS_SUCCESS,
  CAROUSEL_DETAILS_FAIL,
} from "../constants/carouselConstants";

export const listCarousel = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CAROUSEL_LIST_REQUEST });
    const { data } = await axios.get(`/api/carousels`);

    dispatch({
      type: CAROUSEL_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CAROUSEL_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
