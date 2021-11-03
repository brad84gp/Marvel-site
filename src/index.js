import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';



import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ComicReducer from './ReduxStore/Redux';
import {persistStore, persistReducer} from "redux-persist";
import { PersistGate } from 'redux-persist/integration/react'
import storage from "redux-persist/lib/storage";


const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, ComicReducer);

const store = createStore(persistedReducer)

const persistor = persistStore(store);



ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

