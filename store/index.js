import React from "react";
import { buttonReducer } from "./button/reducer.js";
import { headerReducer } from "./header/reducer.js";
import { combineReducers, createStore } from "redux";

// const rootReducer = (state, action) => {
//   return {
//     button: buttonReducer(state.button, action),
//     header: headerReducer(state.header, action),
//   };
// };

const rootReducer = combineReducers({
  // button: buttonReducer,
  header: headerReducer,
});

export const store = createStore(rootReducer);
