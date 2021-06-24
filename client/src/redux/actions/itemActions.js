import axios from "axios";
import { START_LOADING, STOP_LOADING } from "../constants/loadingConstants";
import {
  SHOW_ERROR_MESSAGE,
  SHOW_SUCCESS_MESSAGE,
} from "../constants/messageConstants";
import {
  CREATE_ITEM,
  GET_ITEMS,
  GET_ITEM,
  DELETE_ITEM,
} from "../constants/itemConstants";

export const createItem = (formData) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.post("/api/item", formData);
    dispatch({ type: STOP_LOADING });
    dispatch({ type: CREATE_ITEM, payload: response.data.item });
    dispatch({
      type: SHOW_SUCCESS_MESSAGE,
      payload: response.data.successMessage,
    });
  } catch (err) {
    //console.log('createItem API error: ', err);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: err.response.data.errorMessage,
    });
  }
};

export const getItems = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get("/api/item");
    dispatch({ type: STOP_LOADING });
    dispatch({ type: GET_ITEMS, payload: response.data.items });
  } catch (err) {
    console.log("getItems API error: ", err);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: err.response.data.errorMessage,
    });
  }
};

export const getItem = (itemId) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(`/api/item/${itemId}`);
    dispatch({ type: STOP_LOADING });
    dispatch({ type: GET_ITEM, payload: response.data });
  } catch (err) {
    //console.log('getItems API error: ', err);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: err.response.data.errorMessage,
    });
  }
};

export const deleteItem = (itemId) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.delete(`/api/item/${itemId}`);
    dispatch({ type: STOP_LOADING });
    dispatch({ type: DELETE_ITEM, payload: response.data });
  } catch (err) {
    console.log("deleteItem API error: ", err);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: err.response.data.errorMessage,
    });
  }
};
