import {
  SUBSCRIBER_LOGIN_REQUEST,
  SUBSCRIBER_LOGIN_SUCCESS,
  SUBSCRIBER_LOGIN_FAIL,
  SUBSCRIBER_LOGOUT,
  SUBSCRIBER_REGISTER_REQUEST,
  SUBSCRIBER_REGISTER_SUCCESS,
  SUBSCRIBER_REGISTER_FAIL,
  SUBSCRIBER_DETAILS_REQUEST,
  SUBSCRIBER_DETAILS_SUCCESS,
  SUBSCRIBER_DETAILS_FAIL,
  SUBSCRIBER_UPDATE_REQUEST,
  SUBSCRIBER_UPDATE_SUCCESS,
  SUBSCRIBER_UPDATE_FAIL,
  BILLINGADDRESS_UPDATE_REQUEST,
  BILLINGADDRESS_UPDATE_SUCCESS,
  BILLINGADDRESS_UPDATE_FAIL,
} from "../constants/subscriberConstants";

export const subscriberLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case SUBSCRIBER_LOGIN_REQUEST:
      return { loading: true };
    case SUBSCRIBER_LOGIN_SUCCESS:
      return { loading: false, subscriberInfo: action.payload };
    case SUBSCRIBER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case SUBSCRIBER_LOGOUT:
      return {};
    default:
      return state;
  }
};
export const subscriberRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case SUBSCRIBER_REGISTER_REQUEST:
      return { loading: true };
    case SUBSCRIBER_REGISTER_SUCCESS:
      return { loading: false, success: true, subscriberInfo: action.payload };
    case SUBSCRIBER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
// export const subscriberLogoutrReducer = (state = {}, action) => {
//   switch (action.type) {
//     case SUBSCRIBER_REGISTER_REQUEST:
//       return { loading: true };
//     case SUBSCRIBER_REGISTER_SUCCESS:
//       return { loading: false, success: true, subscriberInfo: action.payload };
//     case SUBSCRIBER_REGISTER_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };
export const subscriberDetailsReducer = (
  state = { subscriber: {} },
  action
) => {
  switch (action.type) {
    case SUBSCRIBER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case SUBSCRIBER_DETAILS_SUCCESS:
      return { loading: false, success: true, subscriber: action.payload };
    case SUBSCRIBER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const subscriberUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case SUBSCRIBER_UPDATE_REQUEST:
      return { loading: true };
    case SUBSCRIBER_UPDATE_SUCCESS:
      return { loading: false, success: true, subscriberInfo: action.payload };
    case SUBSCRIBER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const billingAddressUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case BILLINGADDRESS_UPDATE_REQUEST:
      return { loading: true };
    case BILLINGADDRESS_UPDATE_SUCCESS:
      return { loading: false, success: true, subscriberInfo: action.payload };
    case BILLINGADDRESS_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
