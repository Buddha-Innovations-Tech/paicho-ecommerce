import axios from "axios";
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
  BILLINGADDRESS_UPDATE_SUCCESS,
  BILLINGADDRESS_UPDATE_REQUEST,
  BILLINGADDRESS_UPDATE_FAIL,
} from "../constants/subscriberConstants";

export const login = (mobilenumber, password) => async (dispatch) => {
  try {
    dispatch({
      type: SUBSCRIBER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/subscribers/login",
      { mobilenumber, password },
      config
    );

    dispatch({
      type: SUBSCRIBER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("subscriberInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: SUBSCRIBER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const logout = () => (dispatch) => {
  localStorage.removeItem("subscriberInfo");
  dispatch({ type: SUBSCRIBER_LOGOUT });
};

export const getSubscriberDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SUBSCRIBER_DETAILS_REQUEST,
    });
    const {
      subscriberLogin: { subscriberInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${subscriberInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `/api/subscribers/${id}/me/`,

      config
    );
    dispatch({
      type: SUBSCRIBER_DETAILS_SUCCESS,
      payload: data,
    });
    // dispatch({
    //   type: SUBSCRIBER_LOGIN_SUCCESS,
    //   payload: data,
    // });

    // localStorage.setItem("subscriberInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: SUBSCRIBER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const register =
  (firstname, lastname, email, mobilenumber, password, confirmpassword) =>
  async (dispatch) => {
    try {
      dispatch({
        type: SUBSCRIBER_REGISTER_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/subscribers/Register",
        {
          firstname,
          lastname,
          email,
          mobilenumber,
          password,
          confirmpassword,
        },
        config
      );
      console.log(data);
      dispatch({
        type: SUBSCRIBER_REGISTER_SUCCESS,
        payload: data,
      });
      // dispatch({
      //   type: SUBSCRIBER_LOGIN_SUCCESS,
      //   payload: data,
      // });

      // localStorage.setItem("subscriberInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: SUBSCRIBER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const updateSubscriber = (subscriber) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SUBSCRIBER_UPDATE_REQUEST,
    });
    const {
      subscriberLogin: { subscriberInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${subscriberInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/subscribers/profile/me/`,
      subscriber,
      config
    );
    dispatch({
      type: SUBSCRIBER_UPDATE_SUCCESS,
      payload: data,
    });
    // dispatch({
    //   type: SUBSCRIBER_LOGIN_SUCCESS,
    //   payload: data,
    // });

    // localStorage.setItem("subscriberInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: SUBSCRIBER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateBillingAddress =
  (billingAddress) => async (dispatch, getState) => {
    try {
      dispatch({
        type: BILLINGADDRESS_UPDATE_REQUEST,
      });
      const {
        subscriberLogin: { subscriberInfo },
      } = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${subscriberInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/subscribers/billing/details`,
        billingAddress,
        config
      );
      console.log(data);
      dispatch({
        type: BILLINGADDRESS_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: BILLINGADDRESS_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
