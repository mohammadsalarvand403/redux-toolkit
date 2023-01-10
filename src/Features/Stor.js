import { configureStore } from '@reduxjs/toolkit'
import CounterReducers from './Counter/CounterSlice'

export const store = configureStore({
  reducer: {
    counter:CounterReducers
  },
})