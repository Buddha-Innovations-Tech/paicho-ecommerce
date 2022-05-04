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
  CAROUSEL_CREATE_RESET,
  CAROUSEL_UPDATE_REQUEST,
  CAROUSEL_UPDATE_SUCCESS,
  CAROUSEL_UPDATE_FAIL,
  CAROUSEL_DETAILS_REQUEST,
  CAROUSEL_DETAILS_SUCCESS,
  CAROUSEL_DETAILS_FAIL,
} from "../constants/carouselConstants";

export const carouselListReducer = (state = { carousel: [] }, action) => {
  switch (action.type) {
    case CAROUSEL_LIST_REQUEST:
      return { loading: true, carousel: [] };
    case CAROUSEL_LIST_SUCCESS:
      return {
        loading: false,
        carousel: action.payload,
      };
    case CAROUSEL_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


