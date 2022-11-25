import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import reportWebVitals from './reportWebVitals';


// utilities from libraries
import logger from 'redux-logger';
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware} from 'redux'

// root saga + reducer
import rootReducer from './reducer'
import rootSaga from './saga'


// setup
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
   rootReducer,
   applyMiddleware(sagaMiddleware, logger) 
)

sagaMiddleware.run(rootSaga)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

