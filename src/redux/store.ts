import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import { reducer as githubReducer } from "./github/github.reducer";
import { githubSaga } from "./github/github.sagas";

import { reducer as layoutReducer } from "./layout/layout.reducer";

const rootReducer = combineReducers({
  githubState: githubReducer,
  layoutState: layoutReducer
});

const initialState = {};
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

export const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(githubSaga);
