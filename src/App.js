import React, {useState} from 'react';
import HelloWorld from './HelloWorld';
import { createStore } from "redux";
import reducer from "./reducers";

const initialState = {tech : "Redux"};
const store = createStore(reducer, initialState);

export default function App() {

  return (
    <div>
      <HelloWorld setTech={store.getState().tech} />
    </div>
  )
}

