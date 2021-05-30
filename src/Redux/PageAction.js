import { PageService } from "../Services/PageService";
import {
  FETCH_PAGES_REQUEST,
  FETCH_PAGES_SUCCESS,
  FETCH_PAGES_FAILURE,
} from "./PageTypes";

export const fetchPages = () => {
  // alert("fetching data from database.");
  return (dispatch) => {
    dispatch(fetchPagesRequest());
    let service = new PageService();
    service
      .viewAll()
      .then((response) => {
        const pages = response.data;
        dispatch(fetchPagesSuccess(pages));
      })
      .catch((error) => {
        dispatch(fetchPagesFailure(error.message));
      });
  };
};

export const fetchPagesRequest = () => {
  return {
    type: FETCH_PAGES_REQUEST,
  };
};

export const fetchPagesSuccess = (pages) => {
  return {
    type: FETCH_PAGES_SUCCESS,
    payload: pages,
  };
};

export const fetchPagesFailure = (error) => {
  return {
    type: FETCH_PAGES_FAILURE,
    payload: error,
  };
};
