import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import axios from "axios";
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  REGISTER_USER_PASSWORD_MISMATCH,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGOUT_USER,
  GET_OFFERS_BEGIN,
  GET_OFFERS_SUCCESS,
  GET_OFFERS_ERROR,
  OPEN_MODAL,
  CLOSE_MODAL,
  POST_OFFER_BEGIN,
  POST_OFFER_ERROR,
  POST_OFFER_SUCCESS,
  GET_USER_BEGIN,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from "./actions";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const userLocation = localStorage.getItem("location");

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  jobLocation: "",
  offers: [],
  totalOffers: null,
  offersPageNumber: 1,
  isModalOpen: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({
        type: CLEAR_ALERT,
      });
    }, 3000);
  };

  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("location");
  };

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await axios.post("/api/v1/auth/register", currentUser);
      console.log(response);
      const { user, token, location } = response.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token, location },
      });

      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const response = await axios.post("/api/v1/auth/login", currentUser);
      // console.log(response);
      const { user, token } = response.data;
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token },
      });

      addUserToLocalStorage({ user, token });
    } catch (error) {
      // console.log(error.response);
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  const registerUserPasswordMismatch = () => {
    dispatch({ type: REGISTER_USER_PASSWORD_MISMATCH });
    clearAlert();
  };

  const postOffer = async (offer) => {
    dispatch({ type: POST_OFFER_BEGIN });
    try {
      await axios.post("/api/v1/offer/postoffer", offer);
      dispatch({ type: POST_OFFER_SUCCESS });
      setTimeout(() => {
        closeModal();
      }, 1000);
    } catch (error) {
      dispatch({
        type: POST_OFFER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const getOffers = async (offersPageNumber) => {
    dispatch({ type: GET_OFFERS_BEGIN });
    try {
      const { data } = await axios.get("/api/v1/offer/getoffers", {
        params: { page: offersPageNumber },
      });
      const { offers, totalOffers } = data;
      dispatch({
        type: GET_OFFERS_SUCCESS,
        payload: {
          offers,
          totalOffers,
          offersPageNumber,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_OFFERS_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const getUser = async (userID) => {
    // dispatch({ type: GET_USER_BEGIN });
    // try {
    //   const { data } = await axios.get(`/api/v1/user/${userID}`);
    //   console.log(data);
    //   dispatch({
    //     type: GET_USER_SUCCESS,
    //     payload: { userList: data },
    //   });
    // } catch (error) {
    //   dispatch({ type: GET_OFFERS_ERROR });
    // }
    // clearAlert();
  };

  const openModal = () => {
    dispatch({ type: OPEN_MODAL });
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
        loginUser,
        registerUserPasswordMismatch,
        logoutUser,
        getOffers,
        postOffer,
        getUser,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
