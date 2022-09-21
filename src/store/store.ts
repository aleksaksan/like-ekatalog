import { combineReducers, configureStore } from '@reduxjs/toolkit';
import categoryReducer from './reducers/CategorySlice';

const rootReducer = combineReducers({
  categoryReducer,
});

// export const store = configureStore({
//   reducer: {
//     rootReducer
//   },
// });
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
