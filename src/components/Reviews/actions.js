import 'whatwg-fetch';
import config from 'react-global-configuration';


export const REQUEST_REVIEWS = 'REQUEST_REVIEWS';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';

export const requestReviews = () => ({
  type: REQUEST_REVIEWS,
});

export const receiveReviews = (reviews, productId) => ({
  type: RECEIVE_REVIEWS,
  reviews,
  productId,
});

export const fetchReviews = productId => (dispatch) => {
  dispatch(requestReviews());

