import React from 'react';

//to access a piece of state:
import {useSelector, useDispatch} from 'react-redux'
import {increment} from './actions'
import {decrement} from './actions'

function App() {
  const counter = useSelector(state =>state.counter)
  const isLogged = useSelector(state => state.isLogged)
  //this is how state is extracted from the store
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick = {() => dispatch(increment(5))}>+</button>
      <button onClick = {() => dispatch(decrement())}>-</button>
      {isLogged ?
      <h3>valuable information i shouldn't see</h3>
      :
      ''
      }
    </div>
  );
}

export default App;
