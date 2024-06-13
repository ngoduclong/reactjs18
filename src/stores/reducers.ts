import { combineReducers } from '@reduxjs/toolkit';

import { loadingReducer } from './loading';
import { exampleReducer } from './example';

const rootReducer = combineReducers({
  loading: loadingReducer,
  example: exampleReducer,
});

export default rootReducer;
