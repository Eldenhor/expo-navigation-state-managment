import { applyMiddleware, combineReducers, createStore } from "redux";
import { alertReducer, counterReducer, fetchReducer } from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";



const rootReducer = combineReducers({
  count: counterReducer,
  fetchedData: fetchReducer,
  alert: alertReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
