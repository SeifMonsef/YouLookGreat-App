import { createStore, applyMiddleware } from 'redux';
import config from 'react-global-configuration';
import { reducer as toastr } from 'react-redux-toastr';
import { persistCombineReducers, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';



import search from './views/Search/reducer';


// load config variables
config.set(window.INITIAL_CONFIG, { freeze: false });

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: [
    'search',
  ],
  // debug: true,
};
const rootReducer = persistCombineReducers(rootPersistConfig, {
  categories: persistReducer(
    {
      key: 'categories',
      storage,
      blacklist: ['isFetching', 'hasMore'],
    },
    categories,
  ),
  products: persistReducer(
    {
      key: 'products',
      storage,
      blacklist: ['isFetching', 'hasMore'],
    },
    products,
  ),
  reviews: persistReducer(
    {
      key: 'reviews',
      storage,
      blacklist: ['isFetching'],
    },
    reviews,
  ),
  variations: persistReducer(
    {
      key: 'variations',
      storage,
      blacklist: ['isFetching'],
    },
    variations,
  ),
  cart: persistReducer(
    {
      key: 'cart',
      storage,
    },
    cart,
  ),
  navbar,
  search,
  toastr,
});

const history = createHistory();

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(thunk, logger, routerMiddleware(history)),
);

if (config.get('OFFLINE')) {
  persistStore(store);
}

export { history };
export default store;
