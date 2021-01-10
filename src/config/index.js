import { applyMiddleware, createStore, compose } from "redux";
import { persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "../reducers";
import { routerMiddleware } from "connected-react-router";
import logger from "redux-logger";

export default history => {
  debugger;
  let store =
    process.env.REACT_APP_ENV !== "production"
      ? createStore(
        reducers(history),
        composeWithDevTools(
          applyMiddleware(logger, thunk, routerMiddleware(history))
        )
      )
      : createStore(
        reducers(history),
        compose(applyMiddleware(thunk, routerMiddleware(history)))
      );
  const persistor = persistStore(store);
  return { persistor, store };
};
