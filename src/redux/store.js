import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
//import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlewares = [thunk];
let composeEnhancers = compose;

if (process.env.NODE_ENV === "development") {
  //middlewares.push(logger);
  composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeEnhancers;
}

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
const persistor = persistStore(store);

export { store, persistor };
