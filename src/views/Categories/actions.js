import 'whatwg-fetch';
import config from 'react-global-configuration';

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

export const requestCategories = () => ({
  type: REQUEST_CATEGORIES,
});

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories,
});

export const fetchCategories = (params = {}) => (dispatch) => {
  dispatch(requestCategories());

  let url;
  if (params && params.id) {
    url = config.get('API_CATEGORIES_URL') + String(params.id);
  } else {
    url =
      config.get('API_CATEGORIES_URL') +
      '?' +
      Object.keys(params)
        .map(k => k + '=' + encodeURIComponent(params[k]))
        .join('&');
  }
  return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(receiveCategories(json)))
    .catch(() => {
      dispatch(receiveCategories([]));
    });
};
