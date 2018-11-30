import 'whatwg-fetch';
import config from 'react-global-configuration';

export const REQUEST_VARIATIONS = 'REQUEST_VARIATIONS';
export const RECEIVE_VARIATIONS = 'RECEIVE_VARIATIONS';

export const requestVariations = () => ({
  type: REQUEST_VARIATIONS,
});

export const receiveVariations = variations => ({
  type: RECEIVE_VARIATIONS,
  variations,
});

