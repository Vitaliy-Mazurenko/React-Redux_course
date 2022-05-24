import React from 'react';
import {createStore, bindActionCreators} from 'redux';
import Counter from './counter'
import reducer from '../reducer';
import * as actions from '../actions';
const store = createStore(reducer);
const { dispatch } = store;


const App = () => {
  const { inc, dec, rnd }= bindActionCreators(actions, dispatch);
  return (
    <Counter counter={store.getState()}
			inc={inc}
			dec={dec}
			rnd={()=> {
				const value = Math.floor(Math.random()*10);
				rnd(value);
			}}/>
  );
}
export default App;


