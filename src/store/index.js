// @reduxjs/toolkit

import homeReducer from './modules/home'
import { configureStore } from "@reduxjs/toolkit";
import entireReducer from './modules/entire'


const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer
  }
})

export default store