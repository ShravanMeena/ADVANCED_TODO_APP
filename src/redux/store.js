import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// reduxers
import notesReducers from "./reducers/notesReducers";
import errorReducers from "./reducers/errorReducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["notesReducers"],
};

const rootReducer = combineReducers({
  notesReducers,
  errorReducers,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);
