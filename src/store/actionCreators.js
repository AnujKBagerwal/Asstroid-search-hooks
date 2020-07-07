import {
  SHOW_LOADER,
  HIDE_LOADER,
  GET_ASTROID,
  SEARCH_TEXT,
  SUBMIT_BTN,
  RANDOM_BTN,
  RESET_BTN,
} from './action';
import { getAstroidUrl } from '../services/services';

export const showLoaderAction = () => {
  return {
    type: SHOW_LOADER,
  };
};

export const hideLoaderAction = () => {
  return {
    type: HIDE_LOADER,
  };
};

export const submitBtnAction = () => {
  return (dispatch) => {
    dispatch({
      type: SUBMIT_BTN,
    });
  };
};

export const randomBtnAction = () => {
  return (dispatch) => {
    dispatch({
      type: RANDOM_BTN,
    });
  };
};

export const resetBtnAction = () => {
  return (dispatch) => {
    dispatch({
      type: RESET_BTN,
    });
  };
};

export const searchTextAction = (payload) => {
  return (dispatch) => {
    dispatch({
      type: SEARCH_TEXT,
      payload: payload,
    });
  };
};

export const getAstroidAction = () => {
  return (dispatch) => {
    dispatch(showLoaderAction());
    getAstroidUrl()
      .then((response) => {
        console.log('res', response);
        dispatch(hideLoaderAction());
        dispatch({
          type: GET_ASTROID,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch(hideLoaderAction());
        alert('Something went wrong while fetching Astroid Details');
      });
  };
};
