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
  POST_OFFER_SUCCESS,
  POST_OFFER_ERROR,
  GET_USER_BEGIN,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from "./actions";
import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values",
    };
  }

  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }

  if (action.type === REGISTER_USER_PASSWORD_MISMATCH) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Passwords do not match",
    };
  }

  if (action.type === REGISTER_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.userLocation,
      showAlert: true,
      alertType: "success",
      alertText: "User Created! Redirecting...",
    };
  }

  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === LOGIN_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.userLocation,
      showAlert: true,
      alertType: "success",
      alertText: "Log In Succesful! Redirecting...",
    };
  }

  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
      userLocation: null,
    };
  }

  if (action.type === GET_OFFERS_BEGIN) {
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    };
  }

  if (action.type === GET_OFFERS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      offers: action.payload.offers,
      totalOffers: action.payload.totalOffers,
    };
  }

  if (action.type === GET_OFFERS_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === POST_OFFER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === POST_OFFER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Posting...",
    };
  }

  if (action.type === POST_OFFER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: "An error has occured",
    };
  }

  if (action.type === GET_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
      // userList: action.payload.userList,
    };
  }

  if (action.type === GET_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (action.type === GET_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === OPEN_MODAL) {
    return {
      ...state,
      isModalOpen: true,
    };
  }

  if (action.type === CLOSE_MODAL) {
    return {
      ...state,
      isModalOpen: false,
      showAlert: false,
      alertType: false,
      alertText: false,
    };
  }

  throw new Error(`no such action: ${action.type}`);
};

export default reducer;
