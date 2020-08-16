import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import allReducers from './reducers'
import {Provider} from 'react-redux'



//ACTION

const increment = () => {
  return {
  type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
  type: 'DECREMENT'
  }
}

//REDUCER
const counter = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
  }
}

let store = createStore(allReducers, 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//binds reducer to store

store.dispatch(increment)

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
    //provider connects app to store
  document.getElementById('root')
);


